export type NavInnerLinkType = {
  item: string;
  active: boolean;
};

export type Devices = "uncanny" | "carrida" | "";

export type NavLinkType = {
  item: string;
  icon: string;
  innerLinks: NavInnerLinkType[] | null;
  active: boolean;
};

// export type DeviceType = z.infer<typeof UncannyDeviceSchema>;
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
  saved: boolean;
  label?: string;
  ip?: string;
  port?: number;
};

export type UncannyGetCameraType = {
  data: UncannyCameraType[];
  message: string;
  status: number;
  success: boolean;
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
