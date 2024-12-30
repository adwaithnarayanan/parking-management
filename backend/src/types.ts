import { z } from "zod";
import { addDeviceSchema, editDeviceSchema } from "./schemas/device.schema.js";
import { addCameraSchema } from "./schemas/camera.schema.js";
import {
  addIdentifierSchema,
  editIdentifierSchema,
} from "./schemas/identifier.schema.js";

export type unsavedCameraType = {
  activated: boolean;
  camera_id: number;
  name: string;
};

export type ResponseCameraType = {
  saved: boolean;
  activated: boolean;
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
  data?: any;
};

export type CameraType = z.infer<typeof addCameraSchema>;

export type DeviceType = z.infer<typeof addDeviceSchema>;
export type editDeviceType = z.infer<typeof editDeviceSchema>;

export type IdentifierType = z.infer<typeof addIdentifierSchema> & {
  identifierId: string;
  type: string;
};

export type EditIdentifierType = z.infer<typeof editIdentifierSchema>;
