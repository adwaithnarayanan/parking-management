import asyncHandler from "express-async-handler";
import { CameraType } from "../types.js";
import { Request, Response } from "express";
import {
  deleteCameraFromDb,
  getAllCamerasFromDb,
  insertIntoDB,
} from "../services/camera.service.js";

export const addCamera = asyncHandler(async (req: Request, res: Response) => {
  const response = await insertIntoDB(req.body);

  res.status(response.status).json(response);
});

export const getCameras = asyncHandler(async (req: Request, res: Response) => {
  const response = await getAllCamerasFromDb();

  res.status(response.status).json(response);
});

export const deleteCamera = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await deleteCameraFromDb(req.body.id);

    res.status(response.status).json(response);
  }
);
