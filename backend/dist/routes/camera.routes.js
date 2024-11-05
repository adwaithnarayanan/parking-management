import express from "express";
import { addCamera, deleteCamera, getCameras, } from "../controllers/cameraController.js";
import { validationMiddleware } from "../middleware/validation.middleware.js";
import { addCameraSchema, deleteCameraSchema, } from "../schemas/camera.schama.js";
const cameraRouter = express.Router();
cameraRouter.post("/", validationMiddleware(addCameraSchema), addCamera);
cameraRouter.delete("/", validationMiddleware(deleteCameraSchema), deleteCamera);
cameraRouter.get("/", getCameras);
export { cameraRouter };
//# sourceMappingURL=camera.routes.js.map