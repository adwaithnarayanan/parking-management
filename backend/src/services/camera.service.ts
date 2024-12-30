import { Camera } from "../models/camera.model.js";
import {
  AllCamerasType,
  CameraType,
  ResponseCameraType,
  unsavedCameraType,
} from "../types.js";
import * as fs from "fs";

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

export async function getSavedCamerasFromDb(device_id: number) {
  const savedCameras = (
    await Camera.findAll({
      where: { deviceId: device_id },
    })
  ).map((camera) => ({ ...camera.dataValues, saved: true }));

  const unSavedCameras = (await getDummyUncannyCameras()).data;

  const unSavedCamerasArr: unsavedCameraType[] = Object.keys(
    unSavedCameras.property
  ).map((cameraKey) => unSavedCameras.property[cameraKey]);

  const cameras: ResponseCameraType[] = [...savedCameras];

  unSavedCamerasArr.forEach((unSavedCamera) => {
    const saved = savedCameras.find(
      (savedCamera) => unSavedCamera.name === savedCamera.name
    );

    if (!saved) {
      cameras.push({
        activated: unSavedCamera.activated,
        cameraId: unSavedCamera.camera_id,
        name: unSavedCamera.name,
        saved: false,
      });
    }
  });

  return cameras
    ? { status: 200, success: true, message: "Fetched cameras", data: cameras }
    : { status: 403, success: false, message: "Unable to fetch data" };
}

export async function updateCamera({
  id,
  ...cameraDetails
}: CameraType & { id: number }) {
  const response = await Camera.update(cameraDetails, {
    where: {
      id: id,
    },
  });

  if (response[0]) {
    return {
      status: 200,
      message: "Successfully updated",
      success: true,
      data: cameraDetails,
    };
  } else return { status: 403, message: "Unable to edit", success: false };
}

export async function getDummyUncannyCameras() {
  const filePath = "./cameras.json";

  const promise: AllCamerasType = await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        resolve({
          status: 403,
          message: err,
          success: false,
        });
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve({
            status: 200,
            message: "Successfully fetched cameras",
            success: true,
            data: jsonData,
          });
        } catch (err) {
          resolve({ status: 403, message: err, success: false });
        }
      }
    });
  });
  return promise;
}
