import { NextFunction } from "express";
import {
  addEventLogIntoDb,
  getEventLogFromDb,
} from "../services/webhook.service.js";

export const getEventLog = async (req: any, res: any, next: NextFunction) => {
  try {
    const response = await getEventLogFromDb();
    res.status(200).json({ message: "data fetched", data: response });
  } catch (err) {
    next(err);
  }
};

export const addEventLog = async (req: any, res: any, next: NextFunction) => {
  try {
    await addEventLogIntoDb({ log: req.body });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
