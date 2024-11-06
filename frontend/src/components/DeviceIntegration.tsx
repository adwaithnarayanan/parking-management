import ANPRDevices from "./ANPRDevices";
import CamerasSection from "./CamerasSection";
import { useGetDevices } from "../hooks/APIs/useGetDevices";

const DeviceIntegration = () => {
  const { data: deviceData, isSuccess: isSuccessGetDevice } = useGetDevices();

  return (
    <>
      <ANPRDevices deviceData={deviceData} />
      <CamerasSection deviceData={deviceData?.data} />
    </>
  );
};

export default DeviceIntegration;
