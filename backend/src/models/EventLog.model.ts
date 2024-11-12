import {
  CreationOptional,
  DataTypes,
  HasOneAssociation,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";
import { JSONB } from "@sequelize/core/_non-semver-use-at-your-own-risk_/abstract-dialect/data-types.js";
import {
  Attribute,
  AutoIncrement,
  BelongsTo,
  DeletedAt,
  HasOne,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { Camera } from "./camera.model.js";

export class EventLog extends Model<
  InferAttributes<EventLog>,
  InferCreationAttributes<EventLog>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.JSONB)
  declare log: JSONB;

  @Attribute(DataTypes.JSONB)
  declare eventLog: JSONB;

  @Attribute(DataTypes.INTEGER)
  declare cameraId: number | null;

  @DeletedAt
  declare deletedAt: Date | null;
}
