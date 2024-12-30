import express from "express";
import { deviceRouter } from "./routes/device.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { dbConnection } from "./database.js";
import { cameraRouter } from "./routes/camera.routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { identifierRouter } from "./routes/identifiers.routes.js";
import { webhookRouter } from "./routes/webhook.routes.js";
import { accessReportRouter } from "./routes/accessReport.routes.js";

const app = express();

(async () => {
  await dbConnection();
})();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/devices", deviceRouter);
app.use("/cameras", cameraRouter);
app.use("/identifiers", identifierRouter);
app.use("/webhook", webhookRouter);
app.use("/report", accessReportRouter);

app.all("*", (_, res) => {
  res.statusCode = 404;
  throw new Error("Page not found");
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
