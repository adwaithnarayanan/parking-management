import express from "express";
import { addCamera, deleteCamera, editCamera, getCameras, getSavedCameras, getUnsavedUncannyCameras, } from "../controllers/cameraController.js";
import { validationMiddleware } from "../middleware/validation.middleware.js";
import { addCameraSchema, deleteCameraSchema, getSavedCamerasSchema, } from "../schemas/camera.schama.js";
import { paramsValidation } from "../middleware/validation.params.middleware.js";
const cameraRouter = express.Router();
cameraRouter.post("/", validationMiddleware(addCameraSchema), addCamera);
cameraRouter.delete("/:id", paramsValidation(deleteCameraSchema), deleteCamera);
cameraRouter.get("/", getCameras);
cameraRouter.get("/:id", paramsValidation(getSavedCamerasSchema), getSavedCameras);
cameraRouter.put("/", editCamera);
// Dummy data
cameraRouter.get("/new/uncanny", getUnsavedUncannyCameras);
export { cameraRouter };
//# sourceMappingURL=camera.routes.js.map