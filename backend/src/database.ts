import Sequelize from "@sequelize/core";
import "dotenv/config";
import { PostgresDialect } from "@sequelize/postgres";
import { Camera } from "./models/camera.model.js";
import { Device } from "./models/devices.model.js";
import { Identifier } from "./models/identifier.model.js";
import { EventLog } from "./models/EventLog.model.js";
import { EntryExitLog } from "./models/EntryExitLog.model.js";

const options = {
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,

  models: [Device, Camera, Identifier, EventLog, EntryExitLog],
  dialect: PostgresDialect,
};

const sequelizeConnection = new Sequelize(options);

export async function dbConnection() {
  await sequelizeConnection.sync();
}
