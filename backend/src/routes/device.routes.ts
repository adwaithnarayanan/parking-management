import express from "express";
import { postDevice } from "../controllers/controller.js";

const router = express.Router();

router.route("/").post(postDevice);

export { router };
