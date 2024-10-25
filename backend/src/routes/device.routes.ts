import express from "express";
import { postDevice } from "../controllers/controller";

const router = express.Router();

router.route("/").post(postDevice);

export { router };
