import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  DeletedAt,
  HasMany,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { EventLog } from "./EventLog.model.js";

export class Camera extends Model<
  InferAttributes<Camera>,
  InferCreationAttributes<Camera>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  @NotNull
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare cameraId: number;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  declare activated: boolean;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare deviceId: number;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare ip: string;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare port: number;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare label: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare cameraType: string;

  @DeletedAt
  declare readonly deletedAt: CreationOptional<Date>;

  @HasMany(() => EventLog, {
    foreignKey: "cameraId",
    sourceKey: "id",
  })
  declare eventLog: NonAttribute<EventLog[]> | null;
}
