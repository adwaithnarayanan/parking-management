import express from "express";
import {
  getCsvReport,
  getPdfReport,
  getReport,
} from "../controllers/accessReport.controller.js";

export const accessReportRouter = express.Router();

accessReportRouter.get("/", getReport);
accessReportRouter.get("/downloadpdf", getPdfReport);
accessReportRouter.get("/downloadcsv", getCsvReport);
