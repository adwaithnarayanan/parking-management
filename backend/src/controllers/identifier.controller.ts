import asyncHandler from "express-async-handler";
import {
  addIdentifierToDb,
  deleteIdentiferInDb,
  getIdentifiersFromDb,
  updateIdentifierInDb,
} from "../services/identifier.service.js";

export const addIdentifier = asyncHandler(async (req, res, next) => {
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
  } catch (err: any) {
    res.statusCode = 403;
    throw new Error(err.message);
  }
});

export const getIdentifier = asyncHandler(async (req, res, next) => {
  try {
    const data = await getIdentifiersFromDb();
    res.status(201).json({ status: 201, success: true, data: data });
  } catch (err: any) {
    res.statusCode = 403;
    throw new Error(err.message);
  }
});

export const editIdentifier = asyncHandler(async (req, res) => {
  try {
    const identifierDetails = { ...req.body };

    if (identifierDetails.type === "LP") {
      identifierDetails.identifierId = identifierDetails.licensePlate;
    }

    const response = await updateIdentifierInDb(identifierDetails);
    res.status(201).json({ success: true, status: 201, data: response });
  } catch (err: any) {
    res.statusCode = 403;
    throw new Error(err.message);
  }
});

export const deleteIdentifier = asyncHandler(async (req, res) => {
  try {
    const response = await deleteIdentiferInDb(Number(req.params.id));
    res.status(201).json(response);
  } catch (err: any) {
    res.statusCode = 403;
    throw new Error(err.message);
  }
});
