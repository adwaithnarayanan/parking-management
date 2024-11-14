import { NextFunction } from "express";
import {
  getCsv,
  getPdf,
  getReportFromDb,
} from "../services/accessReport.service.js";

export const getReport = async (req: any, res: any, next: NextFunction) => {
  try {
    const response = await getReportFromDb();
    res.status(200).send({ message: "Success", data: response });
  } catch (err) {
    next(err);
  }
};

export const getPdfReport = async (req: any, res: any, next: NextFunction) => {
  try {
    const response = await getPdf();

    console.log(24234234234);

    res.download("report.pdf");
    res.status(200);
  } catch (err) {
    next(err);
  }
};

export const getCsvReport = async (req: any, res: any, next: NextFunction) => {
  try {
    const response = await getCsv();

    res.attachment("report.csv").send(response);

    res.status(200);
  } catch (err) {
    next(err);
  }
};
