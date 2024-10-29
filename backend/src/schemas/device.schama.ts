import { z } from "zod";

export const addDeviceSchema = z.object({
  label: z.string().min(3),
  ip: z.string().min(7),
  port: z.number().int().min(1),
  dashboardPort: z.number().int().min(1),
});

export const deleteDeviceSchema = z.object({
  id: z.number().min(1),
});

const editSchemaId = z.object({ id: z.number().min(1) });

export const editDeviceSchema = editSchemaId.merge(addDeviceSchema);
