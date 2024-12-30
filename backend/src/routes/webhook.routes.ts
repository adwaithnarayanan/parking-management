import express from "express";
import { addEventLog, getEventLog } from "../controllers/webhook.controller.js";

const webhookRouter = express.Router();

webhookRouter.get("/event/", getEventLog);
webhookRouter.post("/event/", addEventLog);

export { webhookRouter };
