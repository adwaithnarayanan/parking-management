import {
  addIdentifierToDb,
  deleteIdentiferInDb,
  getIdentifiersFromDb,
  updateIdentifierInDb,
} from "../services/identifier.service.js";
import { NextFunction } from "express";

export const addIdentifier = async (req: any, res: any, next: NextFunction) => {
  try {
    const identifierDetails = { ...req.body };

    if (!identifierDetails.identifierId) {
      identifierDetails.identifierId = identifierDetails.licensePlate;
      identifierDetails.type = "LP";
    } else {
      identifierDetails.type = "RF";
    }

    const response = await addIdentifierToDb(identifierDetails);
    res.status(201).json({ success: true, status: 201, data: response });
  } catch (err) {
    next(err);
  }
};

export const getIdentifier = async (req: any, res: any, next: NextFunction) => {
  try {
    const data = await getIdentifiersFromDb();
    res.status(201).json({ status: 201, success: true, data: data });
  } catch (err) {
    next(err);
  }
};

export const editIdentifier = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {
    const identifierDetails = { ...req.body };

    if (identifierDetails.type === "LP") {
      identifierDetails.identifierId = identifierDetails.licensePlate;
    }

    const response = await updateIdentifierInDb(identifierDetails);
    res.status(201).json({ success: true, status: 201, data: response });
  } catch (err) {
    next(err);
  }
};

export const deleteIdentifier = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {
    const response = await deleteIdentiferInDb(Number(req.params.id));
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};
