import { Camera } from "../models/camera.model.js";
import { EntryExitCameraMap } from "../models/EntryExitCameraMap.js";
import { EntryExitLog } from "../models/EntryExitLog.model.js";
import { Identifier } from "../models/identifier.model.js";
import { Parser } from "@json2csv/plainjs";
import { HttpException } from "../exceptions/httpExceptions.js";
import PDFDocument from "pdfkit-table";
import fs from "fs";
import { tableHeader } from "../utils/utils.js";

export const getReportFromDb = async () => {
  const entryExit = (
    await EntryExitLog.findAll({
      include: [EntryExitCameraMap],
    })
  ).map((log) => log.dataValues);

  let report = [];

  for (let log of entryExit) {
    let entryCamera = "";
    let exitCamera = "";
    for (let camera of log.entryExitMap) {
      const cam = (await Camera.findByPk(camera.cameraId))?.dataValues;

      if (cam?.cameraType === "entry") {
        entryCamera = cam.label;
      } else if (cam?.cameraType === "exit") {
        exitCamera = cam.label;
      }
    }

    let duration = "";

    if (log.entryTime && log.exitTime) {
      const durationTime = log.exitTime.getTime() - log.entryTime.getTime();

      const totalSeconds = Math.floor(durationTime / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);

      const remSeconds = totalSeconds % 60;
      const remMinute = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);

      duration = `${totalHours}:${remMinute}:${remSeconds}`;
    }

    const identifier = (
      await Identifier.findOne({
        where: { identifierId: log.identifierId },
      })
    )?.dataValues;

    report.push({
      category: identifier?.vehicleType,
      vehicleNo: log.identifierId,
      tagNo: "",
      entryCam: entryCamera,
      exitCam: exitCamera,
      entryTime: log.entryTime,
      exitTime: log.exitTime,
      duration: duration,
      vehicleStatus: log.invalidatedAt ? "Invalid" : "Valid",
    });
  }

  return report.map((report) => ({
    ...report,
    entryTime: report.entryTime
      ? report.entryTime.getFullYear() +
        "-" +
        report.entryTime.getMonth() +
        "-" +
        report.entryTime.getDate() +
        " " +
        report.entryTime.toLocaleTimeString()
      : null,
    exitTime: report.exitTime
      ? report.exitTime.getFullYear() +
        "-" +
        report.exitTime?.getMonth() +
        "-" +
        report.exitTime?.getDate() +
        " " +
        report.exitTime.toLocaleTimeString()
      : null,
  }));
};

export const getPdf = async () => {
  const report = await getReportFromDb();

  const data = report.map((report) => ({
    ...report,
    entryTime: report.entryTime === null ? "-" : report.entryTime,
    exitTime: report.exitTime === null ? "-" : report.exitTime,
    category: report.category === undefined ? "-" : report.category,
    tagNo: report.tagNo === "" ? "-" : report.tagNo,
    entryCam: report.entryCam === "" ? "-" : report.entryCam,
    exitCam: report.exitCam === "" ? "-" : report.exitCam,
    duration: report.duration === "" ? "-" : report.duration,
  }));

  let from = report[0].entryTime ? report[0].entryTime : report[0].exitTime;
  let upto = report[report.length - 1].exitTime
    ? report[report.length - 1].exitTime
    : report[report.length - 1].entryTime;

  const doc = new PDFDocument({
    size: "A4",
    layout: "landscape",
    margins: { top: 20, left: 50, right: 50, bottom: 80 },
  });
  const stream = fs.createWriteStream("report.pdf");

  doc.pipe(stream);

  doc.fontSize(14).text("Access Report", { align: "center" });

  const table = {
    headers: tableHeader,
    datas: [...data],
  };

  doc.image("./src/assets/images/parkzeus-logo.jpg", 16, 8, {
    width: 80,
    valign: "center",
  });

  doc.fontSize(9).text(`${from} - ${upto}`, { align: "center", lineGap: 2 });

  doc.moveDown();

  await doc.table(table, {
    prepareHeader: () =>
      doc.font("Helvetica-Bold").lineGap(10).fontSize(8).fill("white"),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
      return doc
        .fill("black")
        .font("Helvetica")
        .strokeColor("gray")
        .strokeOpacity(0.8)
        .lineGap(5);
    },
  });

  doc.end();

  return doc;
};

export const getCsv = async () => {
  const report = await getReportFromDb();

  const parser = new Parser();
  const csv = parser.parse(report);

  fs.writeFile("report.csv", csv, (err) => {
    if (err) throw new HttpException({ message: `${err}`, statusCode: 403 });
  });

  return csv;
};
