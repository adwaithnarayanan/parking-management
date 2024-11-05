import ANPRDevices from "./ANPRDevices";
import CamerasSection from "./CamerasSection";
import { useGetDevices } from "../hooks/APIs/useGetDevices";

const DeviceIntegration = () => {
  const { data: deviceData } = useGetDevices();

  return (
    <>
      <ANPRDevices deviceData={deviceData} />
      {deviceData && <CamerasSection deviceData={deviceData?.data} />}
    </>
  );
};

export default DeviceIntegration;
