import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";

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

  @Attribute(DataTypes.INTEGER)
  declare externalId: number | null;

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
}
