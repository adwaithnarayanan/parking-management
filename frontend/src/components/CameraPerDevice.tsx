import Button from "./Button";
import Cameras from "./Cameras";
import { UncannyDeviceType } from "../../types";
import { useGetCameras } from "../hooks/APIs/useGetCameras";

type CameraPerDevicePropsType = {
  device: UncannyDeviceType;
};

const CameraPerDevice = ({ device }: CameraPerDevicePropsType) => {
  const { data: cameraData } = useGetCameras(device.id!);
  const savedCameras = cameraData?.data.filter((camera) => camera.saved);
  const unsavedCameras = cameraData?.data.filter((camera) => !camera.saved);

  return (
    <div className="border-b pb-5 last:pb-0 last:border-none min-h-24">
      <div className="flex justify-between">
        <span className="self-end text-sm text-gray-600">
          {device.label}
          <span>
            {" "}
            | {device.ip}:{device.port}
          </span>
        </span>
        <Button type="button" btnType="refreshCamera">
          <img src="/src/assets/svgs/refresh.svg" alt="refetch" />
        </Button>
      </div>
      <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>
      {/* saved devices */}
      <div className="flex flex-wrap gap-2 mt-2 flex-col">
        <h1>Saved Cameras</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {savedCameras?.map((savedCamera) => (
            <Cameras key={savedCamera.cameraId}>
              <span className="text-gray-500 mr-1">
                #{savedCamera.cameraId}
              </span>
              {savedCamera.label}
              <span className="bg-blue-500 text-white px-2 py-1 rounded-3xl hover:bg-blue-600 ml-2">
                sync
              </span>
            </Cameras>
          ))}
        </div>
        {/* <Message
      messageType="failed"
      message="Failed to fetch cameras."
    /> */}
      </div>
      {/* unsaved cameras */}
      <div className="flex flex-wrap gap-2 mt-2 flex-col">
        <h1>UnSaved Cameras</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {unsavedCameras?.map((unsavedCamera) => (
            <Cameras>
              <span className="text-gray-500 mr-1"></span>
              {unsavedCamera.name}
              <span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">
                +
              </span>
            </Cameras>
          ))}
        </div>
        {/* <Message
      messageType="failed"
      message="Failed to fetch cameras."
    /> */}
      </div>
    </div>
  );
};

export default CameraPerDevice;
