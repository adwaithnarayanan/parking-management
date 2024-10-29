import { z } from "zod";

export const addCameraSchema = z.object({
  cameraId: z.number().int().min(0),
  name: z.string().min(3),
  activated: z.boolean(),
  externalId: z.number().min(0),
  deviceId: z.number().min(0),
});

export const deleteCameraSchema = z.object({
  id: z.number().min(1),
});
