import * as yup from "yup";

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

const UncannyCameraSchema = yup.object().shape({
  label: yup.string().required("Required"),
  ip: yup.string().required("Required"),
  port: yup.number().min(1, "Should be positive").required("Required"),
});

export { UncannyDeviceSchema, CarridaDeviceSchema, UncannyCameraSchema };
