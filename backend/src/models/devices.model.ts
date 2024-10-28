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
  CreatedAt,
  DeletedAt,
  NotNull,
  PrimaryKey,
  UpdatedAt,
} from "@sequelize/core/decorators-legacy";
import { PostgresDialect } from "@sequelize/postgres";
import "dotenv/config";

export class Device extends Model<
  InferAttributes<Device>,
  InferCreationAttributes<Device>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare label: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare ip: CreationOptional<string>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare port: CreationOptional<number>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare dashboardPort: CreationOptional<number>;

  @CreatedAt
  declare creationDate: CreationOptional<Date>;

  @UpdatedAt
  declare lastUpdateDate: CreationOptional<Date>;

  @DeletedAt
  declare deletionDate: CreationOptional<Date>;
}

const sequelize = new Sequelize({
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,

  models: [Device],
  dialect: PostgresDialect,
});

(async () => {
  await sequelize.sync();
})();
