import { UncannyDeviceType } from "../../types";
import CameraPerDevice from "./CameraPerDevice";

type CamerasSectionPropsType = {
  deviceData: UncannyDeviceType[] | undefined;
};

const CamerasSection = ({ deviceData }: CamerasSectionPropsType) => {
  return (
    <section className="bg-white p-5 rounded-md shadow-sm border mt-4">
      {/*  */}
      <div className="flex flex-col gap-6 justify-between">
        {/* EACH DEVICE */}
        {deviceData?.map((device) => (
          <CameraPerDevice key={device.id} device={device} />
        ))}
      </div>
    </section>
  );
};

export default CamerasSection;
