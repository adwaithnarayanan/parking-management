import { InferType } from "yup";
import { IdentifierSchema } from "./src/validationSchamas/schema";

export type NavInnerLinkType = {
  item: string;
  link: string;
};

export type Devices = "uncanny" | "carrida" | "";

export type NavLinkType = {
  item: string;
  icon: string;
  innerLinks: NavInnerLinkType[] | null;
  active: boolean;
};

export type UncannyDeviceType = {
  id?: number;
  label: string;
  ip: string;
  port: number;
  dashboardPort: number;
};

export type UncannyGetDeviceType = {
  data: UncannyDeviceType[];
  message: string;
  status: number;
  success: boolean;
};

export type UncannyCameraType = {
  activated: boolean;
  cameraId: number;
  externalId: number | null;
  name: string;
  saved?: boolean;
  label?: string;
  ip?: string;
  port?: number;
  deviceId?: number;
  cameraType: string;
};

export type UncannyGetCameraType = {
  data: UncannyCameraType[];
  message: string;
  status: number;
  success: boolean;
};

export type CameraContextType = {
  handleAddCamera: (cameraDetails: UncannyCameraType) => void;
};

export type UncannyHandleBlurType = {
  (e: React.FocusEvent<any, Element>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

export type UncannyHandleChangeType = {
  (e: React.ChangeEvent<any>): void;
  <T_1 = string | React.ChangeEvent<any>>(
    field: T_1
  ): T_1 extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
};

export type IdentifierType = {
  id?: number;
  identifierId: string | undefined;
  licensePlate: string;
  organizationName: string | undefined;
  ownerEmail: string | undefined;
  ownerName: string | undefined;
  parkingId: string | undefined;
  type?: string;
  validFrom: string | undefined;
  validUpTo: string | undefined;
  vehicleType: string;
};

export type InitialIdentifierType = InferType<typeof IdentifierSchema>;

export type IdentifierGetType = {
  data: IdentifierType[];
  error?: Error;
  status: number;
  success: boolean;
};

export type EventType = {
  id: number;
  eventLog: {
    cameraId: number;
    timeStamp: string;
    identifierId: string;
    externalCamId: string;
    images: string[];
  };
};

export type GetEventType = {
  message: string;
  data: EventType[];
};

export type ReportType = {
  category: string;
  duration: string;
  entryCam: string;
  exitCam: string;
  entryTime: string;
  exitTime: string;
  tagNo: "";
  validity: string;
  vehicleNo: string;
};

export type GetReportType = { message: string; data: ReportType[] };
