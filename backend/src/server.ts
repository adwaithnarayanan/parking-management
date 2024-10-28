import express from "express";
import { router } from "./routes/device.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import "dotenv/config";
import { dbConnection } from "./database.js";

const app = express();

(async () => {
  await dbConnection();
})();

const port = process.env.PORT || 3000;

app.use(errorHandler);
app.use("/devices", router);
// app.use('/cameras',camera)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
