import Sequelize, {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { PostgresDialect } from "@sequelize/postgres";
import "dotenv/config";
import { Device } from "./devices.model.js";

export class Camera extends Model<
  InferAttributes<Device>,
  InferCreationAttributes<Device>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.INTEGER)
  declare cameraId: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  declare name: CreationOptional<string>;

  @Attribute(DataTypes.INTEGER)
  declare externalId: CreationOptional<number>;

  @Attribute(DataTypes.BOOLEAN)
  declare activated: CreationOptional<boolean>;
}

const sequelize = new Sequelize({
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  host: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,

  models: [Camera],
  dialect: PostgresDialect,
});

(async () => {
  await sequelize.sync();
})();
