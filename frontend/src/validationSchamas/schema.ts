// import { z } from "zod";
import * as yup from "yup";
// const UncannyDeviceSchema = z.object({
//   label: z.string(),
//   ip: z.string().min(1, { message: "Required" }),
//   port: z.number().min(1, { message: "Should be positive " }),
//   dashboardPort: z.number().min(1, { message: "Should be positive" }),
// });

const UncannyDeviceSchema = yup.object().shape({
  label: yup.string().required("Required"),
  ip: yup.string().required("Required"),
  port: yup.number().min(1, "Should be a positive ").required("Required"),
  dashboardPort: yup
    .number()
    .min(1, "Should be a positive ")
    .required("Required"),
});

const CarridaDeviceSchema = yup.object().shape({
  label: yup.string().required("Required"),
});

export { UncannyDeviceSchema, CarridaDeviceSchema };
