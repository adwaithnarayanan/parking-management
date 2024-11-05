import { z } from "zod";
import { addDeviceSchema, editDeviceSchema } from "./schemas/device.schama.js";
import { addCameraSchema } from "./schemas/camera.schama.js";

export type CameraType = z.infer<typeof addCameraSchema>;

export type DeviceType = z.infer<typeof addDeviceSchema>;
export type editDeviceType = z.infer<typeof editDeviceSchema>;
