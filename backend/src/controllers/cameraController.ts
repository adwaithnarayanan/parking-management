import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import {
  deleteCameraFromDb,
  updateCamera,
  getAllCamerasFromDb,
  getDummyUncannyCameras,
  getSavedCamerasFromDb,
  insertIntoDB,
} from "../services/camera.service.js";
import { AllCamerasType } from "../types.js";

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
    const response = await deleteCameraFromDb(Number(req.params.id));

    res.status(response.status).json(response);
  }
);

export const editCamera = asyncHandler(async (req: Request, res: Response) => {
  const response = await updateCamera(req.body);
  res.status(response.status).json(response);
});

export const getSavedCameras = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await getSavedCamerasFromDb(Number(req.params.id));

    res.status(response.status).json(response);
  }
);

export const getUnsavedUncannyCameras = asyncHandler(
  async (req: Request, res: Response) => {
    const response: AllCamerasType = await getDummyUncannyCameras();

    res.status(response.status).json(response);
  }
);
