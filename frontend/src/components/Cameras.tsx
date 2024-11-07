import { useState } from "react";
import AddCameraForm from "./AddCameraForm";
import { UncannyCameraType } from "../../types";
import { useAddCamera } from "../hooks/APIs/useAddCamera";
import { useEditCamera } from "../hooks/APIs/useEditCamera";

type CamerasPropsType = {
  camera?: UncannyCameraType;
  children: React.ReactNode;
  deviceId: number | undefined;
};

const Cameras = ({ deviceId, camera, children }: CamerasPropsType) => {
  const [showForm, setShowForm] = useState(false);

  const { mutate: mutateAddCamera } = useAddCamera();
  const { mutate: mutateEditCamera } = useEditCamera();

  async function handleAddOrEditCamera(cameraDetails: {
    ip: string;
    label: string;
    port: number;
  }) {
    if (camera?.deviceId && camera) {
      // Edit Device
      const { saved, ...cameraData } = {
        ...camera,
        ...cameraDetails,
      };

      mutateEditCamera(cameraData);
      setShowForm(false);
    } else if (camera) {
      // Add new  Device
      const { saved, ...cameraData } = {
        ...camera,
        ...cameraDetails,
        deviceId,
      };
      mutateAddCamera(cameraData);
      setShowForm(false);
    }
  }

  return (
    <>
      <button
        className="cursor-pointer border-none"
        onClick={() => setShowForm(true)}
      >
        <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
          {children}
        </div>
      </button>
      {showForm && (
        <AddCameraForm
          handleAddCamera={handleAddOrEditCamera}
          cameraValues={
            camera?.ip && camera?.port && camera?.label
              ? { ip: camera?.ip, port: camera?.port, label: camera?.label }
              : { ip: "", port: 0, label: "" }
          }
          setShowForm={setShowForm}
        />
      )}
    </>
  );
};

export default Cameras;
