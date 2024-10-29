import { Camera } from "../models/camera.model.js";
import { Device } from "../models/devices.model.js";
import { DeviceType, editDeviceType } from "../types.js";

export async function insertIntoDB(deviceObj: DeviceType) {
  const device = await Device.create({ ...deviceObj });

  if (!device) {
    return { status: 403, success: false, message: "Unable to insert into db" };
  }
  return {
    status: 200,
    success: true,
    message: "Successfully added to db",
    data: device,
  };
}

export async function getAllDevicesFromDb() {
  const devices = await Device.findAll({
    include: [
      {
        model: Camera,
      },
    ],
  });

  if (devices.length === 0) {
    return { status: 404, message: "No data", success: false };
  }
  const deviceList = devices.map((device) => device.toJSON());

  return {
    status: 200,
    message: "Data fetched successfully",
    success: true,
    data: deviceList,
  };
}

export async function deleteDeviceFromDb(id: number) {
  const response = await Device.destroy({
    where: {
      id: id,
    },
  });

  if (response) {
    return {
      status: 200,
      message: "Successfully deleted from DB",
      success: true,
    };
  } else {
    return {
      status: 403,
      message: `Device Deletion failed`,
      success: false,
    };
  }
}

export async function updateDeviceFromDb({
  id,
  ...deviceData
}: editDeviceType) {
  const response = await Device.update(deviceData, {
    where: {
      id: id,
    },
  });

  if (response[0]) {
    return { status: 200, message: "Successfully updated", success: true };
  } else return { status: 403, message: "Unable to edit ", success: false };
}
