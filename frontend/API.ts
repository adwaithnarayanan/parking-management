import { apiClient } from "./src/httpClient/httpClient";
import {
  GetEventType,
  GetReportType,
  IdentifierGetType,
  UncannyCameraType,
  UncannyDeviceType,
  UncannyGetCameraType,
  UncannyGetDeviceType,
} from "./types";

export const addDevice = async (deviceDetails: UncannyDeviceType) => {
  return (await apiClient.post("devices/", deviceDetails)).data;
};

export const getAllDevices = async () => {
  return (await apiClient.get<UncannyGetDeviceType>("devices/")).data;
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
  return (await apiClient.delete(`devices/${deviceId.id}`)).data;
};

// CAMERA API CALLS
export const getCameras = async ({ deviceId }: { deviceId: number }) => {
  return (await apiClient.get<UncannyGetCameraType>(`cameras/${deviceId}`))
    .data;
};

export const addCamera = async (cameraDetails: UncannyCameraType) => {
  return (await apiClient.post(`cameras/`, cameraDetails)).data;
};

export const editCamera = async (cameraDetails: UncannyCameraType) => {
  return (await apiClient.put(`cameras/`, cameraDetails)).data;
};

export const getIdentifiers = async () => {
  return (await apiClient.get<IdentifierGetType>(`identifiers/`)).data;
};

export const addIdentifer = async (identifierData: any) => {
  return (await apiClient.post(`identifiers/`, identifierData)).data;
};

export const updateIdentifier = async (identifierData: any) => {
  return (await apiClient.put(`identifiers/`, identifierData)).data;
};

export const deleteIdentifier = async ({ id }: { id: number }) => {
  return (await apiClient.delete(`identifiers/${id}/`)).data;
};

export const getEvents = async () => {
  return (await apiClient.get<GetEventType>(`webhook/event`)).data;
};

export const getReport = async () => {
  return (await apiClient.get<GetReportType>(`report`)).data;
};

export const downloadCsv = async () => {
  return await apiClient.get(`report/downloadCsv`, {
    headers: {
      "Content-Type": "application/csv",
    },
  });
};

export const donwloadPdf = async () => {
  return (await apiClient.get(`report/downloadPdf`)).data;
};
