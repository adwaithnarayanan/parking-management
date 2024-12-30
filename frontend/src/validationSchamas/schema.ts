import * as yup from "yup";

const emailExpression = /^[a-zA-Z0-9,_+-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,}$/;

const REQUIRED = "Required";

const UncannyDeviceSchema = yup.object().shape({
  label: yup.string().required(REQUIRED),
  ip: yup.string().required(REQUIRED),
  port: yup.number().min(1, "Should be a positive ").required(REQUIRED),
  dashboardPort: yup
    .number()
    .min(1, "Should be a positive ")
    .required(REQUIRED),
});

const CarridaDeviceSchema = yup.object().shape({
  label: yup.string().required(REQUIRED),
});

const UncannyCameraSchema = yup.object().shape({
  label: yup.string().required(REQUIRED),
  ip: yup.string().required(REQUIRED),
  port: yup.number().min(1, "Should be positive").required(REQUIRED),
  cameraType: yup.string().required("Select one").oneOf(["entry", "exit"]),
});

const IdentifierSchema = yup.object().shape({
  identifierType: yup
    .string()
    .required("Please select an option")
    .oneOf(["licensePlateType", "rfid"]),

  identifierId: yup.string().when("identifierType", (value: any) => {
    if (value[0] === "rfid") return yup.string().required(REQUIRED);
    else return yup.string();
  }),

  licensePlate: yup.string().required(REQUIRED),
  parkingId: yup.string(),
  organizationName: yup.string(),
  vehicleType: yup
    .string()
    .required(REQUIRED)
    .oneOf(["2w", "4w"], "Select one"),
  ownerName: yup.string(),
  ownerEmail: yup
    .string()
    .matches(emailExpression, "Please enter a valid email"),
  validFrom: yup.string(),
  validUpTo: yup.string(),
});

export {
  UncannyDeviceSchema,
  CarridaDeviceSchema,
  UncannyCameraSchema,
  IdentifierSchema,
};
