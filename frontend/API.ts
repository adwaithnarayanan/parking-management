import { apiClient } from "./src/httpClient/httpClient";
import {
  UncannyDeviceType,
  UncannyGetCameraType,
  UncannyGetDeviceType,
} from "./types";

export const addDevice = async (deviceDetails: UncannyDeviceType) => {
  console.log(deviceDetails);
  return (await apiClient.post("devices/", deviceDetails)).data;
};

export const getAllDevices = async () => {
  return (await apiClient.get<UncannyGetDeviceType>("devices/")).data;
};

export const getCameras = async ({ deviceId }: { deviceId: number }) => {
  return (await apiClient.get<UncannyGetCameraType>(`cameras/${deviceId}`))
    .data;
};

export const editDevice = async (deviceDetails: UncannyDeviceType) => {
  const device = {
    id: deviceDetails.id,
    label: deviceDetails.label,
    ip: deviceDetails.ip,
    port: deviceDetails.port,
    dashboardPort: deviceDetails.dashboardPort,
  };

  return (await apiClient.put("devices/", device)).data;
};

export const deleteDevice = async (deviceId: { id: number }) => {
  console.log("**", deviceId);
  return (await apiClient.delete(`devices/${deviceId.id}`)).data;
};
