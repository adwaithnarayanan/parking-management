import { Camera } from "../models/camera.model.js";
import { EntryExitCameraMap } from "../models/EntryExitCameraMap.js";
import { EntryExitLog } from "../models/EntryExitLog.model.js";
import { Identifier } from "../models/identifier.model.js";
import fs from "fs";
import { Parser } from "@json2csv/plainjs";
import { HttpException } from "../exceptions/httpExceptions.js";
import PDFDocument from "pdfkit-table";
import { title } from "process";
// import PDFDocument from "pdfkit";

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

  const headers = Object.keys(report[0]);
  const data = report.map((report) =>
    Object.keys(report).map((key: string) =>
      (report as any)[key] === null || (report as any)[key] === ""
        ? "-"
        : (report as any)[key]
    )
  );

  let doc = new PDFDocument({ margin: 30, size: "A4" });
  doc.pipe(fs.createWriteStream("report.pdf"));

  const table = {
    // title: "Access Report",
    title: "Access report",

    headers: [
      "Category",
      "Vehicle No",
      "Tag No",
      "Entry cam",
      "Exit cam",
      "Entry time",
      "Exit time",
      "Duration",
      "Vehicle Status",
    ],
    rows: [...data],
  };

  // doc.image("./src/assets/images/parkzeus-logo.png", {
  //   fit: [250, 300],
  //   align: "center",
  //   valign: "center",
  // });

  await doc.table(table, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
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
