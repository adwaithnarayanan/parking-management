import { z } from "zod";
import { addDeviceSchema, editDeviceSchema } from "./schemas/device.schama.js";
import { addCameraSchema } from "./schemas/camera.schama.js";

export type unsavedCameraType = {
  activated: boolean;
  external_id: number;
  camera_id: number;
  name: string;
};

export type ResponseCameraType = {
  saved: boolean;
  activated: boolean;
  externalId: number | null;
  cameraId: number;
  name: string;
  ip?: string;
  port?: number;
  label?: string;
};

export type AllCamerasType = {
  status: number;
  message: string | Error | unknown;
  success: boolean;
  // data?: unsavedCameraType;
  data?: any;
};

export type CameraType = z.infer<typeof addCameraSchema>;

export type DeviceType = z.infer<typeof addDeviceSchema>;
export type editDeviceType = z.infer<typeof editDeviceSchema>;
