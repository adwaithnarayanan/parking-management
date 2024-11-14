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

export class EntryExitCameraMap extends Model<
  InferAttributes<EntryExitCameraMap>,
  InferCreationAttributes<EntryExitCameraMap>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare entryExitId: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare cameraId: number;
}
