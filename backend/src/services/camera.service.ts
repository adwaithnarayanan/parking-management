import { Camera } from "../models/camera.model.js";
import { CameraType } from "../types.js";

export async function insertIntoDB(cameraObj: CameraType) {
  const camera = await Camera.create({ ...cameraObj });

  if (!camera) {
    return {
      status: 403,
      success: false,
      message: "Unable to add camera to db",
    };
  }

  return {
    status: 200,
    success: true,
    message: "Successfully added to db",
    data: camera,
  };
}

export async function getAllCamerasFromDb() {
  const cameras = await Camera.findAll();

  if (cameras.length === 0) {
    return { status: 404, message: "Not data", success: false };
  }

  const cameraList = cameras.map((camera) => camera.toJSON());

  return {
    status: 200,
    message: "Data fetched successfully",
    success: true,
    data: cameraList,
  };
}

export async function deleteCameraFromDb(id: number) {
  const response = await Camera.destroy({
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
      message: `Camera Deletion failed`,
      success: false,
    };
  }
}
