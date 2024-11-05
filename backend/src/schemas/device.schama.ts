import { z } from "zod";

export const addDeviceSchema = z.object({
  label: z.string().min(3),
  ip: z
    .string()
    .refine((ip) => ip.split(".").length === 4)
    .refine((ip) => ip.split(".").map((i) => Number(i) <= 255)),
  port: z.number().int().min(1),
  dashboardPort: z.number().int().min(1),
});

export const deleteDeviceSchema = z.object({
  id: z.number().min(1),
});

const editSchemaId = z.object({ id: z.number().min(1) });

export const editDeviceSchema = editSchemaId.merge(addDeviceSchema);
