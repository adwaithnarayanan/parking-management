import { z } from "zod";

export const addCameraSchema = z.object({
  cameraId: z.number().int().min(0),
  name: z.string().min(3),
  activated: z.boolean(),
  externalId: z.number().min(0),
  deviceId: z.number().min(0),
  ip: z
    .string()
    .refine((ip) => ip.split(".").length === 4)
    .refine((ip) => ip.split(".").every((i) => Number(i) <= 255)),
  port: z.number().min(0),
  label: z.string().min(3),
});

export const deleteCameraSchema = z.object({
  id: z.number().min(1),
});

export const getSavedCamerasSchema = z.object({
  id: z.number().min(1),
});
