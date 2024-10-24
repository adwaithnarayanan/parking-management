import { z } from "zod";

const DeviceSchema = z.object({
  label: z.string().min(1, { message: "Required" }),
  ip: z.string().min(1, { message: "Required" }),
  port: z.number().min(1, { message: "Should be positive " }),
  dashboardPort: z.number().min(1, { message: "Should be positive" }),
});

export { DeviceSchema };
