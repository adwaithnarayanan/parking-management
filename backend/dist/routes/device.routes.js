import express from "express";
import { addDevice, deleteDevice, getDevices, updateDevice, } from "../controllers/deviceController.js";
import { validationMiddleware } from "../middleware/validation.middleware.js";
import { addDeviceSchema, deleteDeviceSchema, editDeviceSchema, } from "../schemas/device.schema.js";
import { paramsValidation } from "../middleware/validation.params.middleware.js";
const deviceRouter = express.Router();
deviceRouter.post(`/`, validationMiddleware(addDeviceSchema), addDevice);
deviceRouter.get(`/`, getDevices);
deviceRouter.delete("/:id", paramsValidation(deleteDeviceSchema), deleteDevice);
deviceRouter.put("/", validationMiddleware(editDeviceSchema), updateDevice);
export { deviceRouter };
//# sourceMappingURL=device.routes.js.map