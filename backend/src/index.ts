import express from "express";
import { router } from "./routes/device.routes";

const app = express();
const port = 3000;

app.use("/devices", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
