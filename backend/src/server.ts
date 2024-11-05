import express from "express";
import { deviceRouter } from "./routes/device.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { dbConnection } from "./database.js";
import { cameraRouter } from "./routes/camera.routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

(async () => {
  await dbConnection();
})();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);
app.use("/devices", deviceRouter);
app.use("/cameras", cameraRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
