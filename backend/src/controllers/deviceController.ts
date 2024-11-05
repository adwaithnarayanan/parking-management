import asyncHandler from "express-async-handler";
import {
  deleteDeviceFromDb,
  getAllDevicesFromDb,
  insertIntoDB,
  updateDeviceFromDb,
} from "../services/device.service.js";
import { Request, Response } from "express";

export const addDevice = asyncHandler(async (req: Request, res: Response) => {
  const response = await insertIntoDB(req.body);

  res.status(response.status).json(response);
});

export const getDevices = asyncHandler(async (req: Request, res: Response) => {
  const response = await getAllDevicesFromDb();
  res.status(response.status).json(response);
});

export const deleteDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await deleteDeviceFromDb(Number(req.params.id));
    res.status(response.status).json(response);
  }
);

export const updateDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await updateDeviceFromDb(req.body);
    res.status(response.status).json(response);
  }
);
