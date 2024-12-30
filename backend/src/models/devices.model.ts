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
  CreatedAt,
  DeletedAt,
  HasMany,
  NotNull,
  PrimaryKey,
  UpdatedAt,
} from "@sequelize/core/decorators-legacy";
import { Camera } from "./camera.model.js";

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
  declare readonly creationDate: CreationOptional<Date>;

  @UpdatedAt
  declare readonly lastUpdateDate: CreationOptional<Date>;

  @DeletedAt
  declare readonly deletionDate: CreationOptional<Date>;

  @HasMany(() => Camera, {
    foreignKey: "deviceId",
    sourceKey: "id",
  })
  declare cameras?: NonAttribute<Camera[]>;
}
