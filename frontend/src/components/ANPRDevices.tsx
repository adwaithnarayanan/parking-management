import UncannyDevice from "./UncannyDevice.tsx";
import { Devices, UncannyGetDeviceType } from "../../types.ts";
import { useState } from "react";
import Button from "./Button.tsx";
import { useDeleteDevice } from "../hooks/APIs/useDeleteDevice.ts";

const devices: { name: Devices }[] = [{ name: "uncanny" }];

const uncannyInitialValues = { label: "", ip: "", port: 0, dashboardPort: 0 };

type ANPRDevicesPropsType = {
  deviceData: UncannyGetDeviceType | undefined;
};

const ANPRDevices = ({ deviceData }: ANPRDevicesPropsType) => {
  const [expanded, setExpanded] = useState(false);
  const [addNewDevice, setAddNewDevice] = useState(false);

  const { mutate: mutateDeleteDevice } = useDeleteDevice();

  const handleDeleteDevice = (deleteId: { id?: number }) => {
    console.log(deleteId);
    console.log(1234);
    if (deleteId.id) mutateDeleteDevice({ id: deleteId.id });
    else setAddNewDevice(false);
  };

  const handleSelectDevice = () => {
    setExpanded(false);
    setAddNewDevice(true);
  };

  const handleHidePopup = (flag: boolean) => {
    setAddNewDevice(flag);
  };

  const handleAddNewDevice = (_: { id?: number; index?: number }) => {
    setExpanded((prev) => !prev);
  };

  return (
    <section className="bg-white p-5 rounded-md shadow-sm border">
      <h1 className="text-lg mb-4">Access Control ANPR Devices</h1>
      {deviceData?.data &&
        deviceData.data?.map((item, idx) => (
          <div key={idx}>
            <UncannyDevice
              handleHidePopup={handleHidePopup}
              device={{ ...item }}
              handleDeleteDevice={handleDeleteDevice}
            />
          </div>
        ))}

      {addNewDevice && (
        <UncannyDevice
          handleHidePopup={handleHidePopup}
          device={uncannyInitialValues}
          handleDeleteDevice={handleDeleteDevice}
        />
      )}

      <div className="mt-4 relative inline-block text-left">
        <div>
          <Button
            btnType="addNewDevice"
            type="button"
            handleClick={handleAddNewDevice}
          >
            Add new device
            <img
              src="./src/assets/svgs/downArrow.svg"
              alt="down-arrow"
              className="w-5 h-5"
            />
          </Button>
        </div>
        {expanded && (
          <div className="origin-top-right absolute right-0 mt-2 w-fit min-w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {devices.map((device) => (
                <div
                  key={device.name}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  onClick={() => handleSelectDevice()}
                >
                  {device.name.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ANPRDevices;
