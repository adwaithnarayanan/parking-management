import express from "express";
import { addDevice, deleteDevice, getDevices, updateDevice, } from "../controllers/deviceController.js";
import { validationMiddleware } from "../middleware/validation.middleware.js";
import { addDeviceSchema, deleteDeviceSchema, editDeviceSchema, } from "../schemas/device.schama.js";
const deviceRouter = express.Router();
deviceRouter.post(`/`, validationMiddleware(addDeviceSchema), addDevice);
deviceRouter.get(`/`, getDevices);
deviceRouter.delete("/", validationMiddleware(deleteDeviceSchema), deleteDevice);
deviceRouter.put("/", validationMiddleware(editDeviceSchema), updateDevice);
export { deviceRouter };
//# sourceMappingURL=device.routes.js.map