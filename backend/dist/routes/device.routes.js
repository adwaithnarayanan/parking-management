import express from "express";
import { postDevice } from "../controllers/controller.js";
const router = express.Router();
//dyi
router.route("/").post(postDevice);
export { router };
//# sourceMappingURL=device.routes.js.map