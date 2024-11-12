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
  Unique,
} from "@sequelize/core/decorators-legacy";
import { EntryExitLog } from "./EntryExitLog.model.js";

export class Identifier extends Model<
  InferAttributes<Identifier>,
  InferCreationAttributes<Identifier>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  @NotNull
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  declare identifierId: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare licensePlate: string;

  @Attribute(DataTypes.STRING)
  declare parkingId: string;

  @Attribute(DataTypes.STRING)
  declare organizationName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare vehicleType: string;

  @Attribute(DataTypes.STRING)
  declare ownerName: string | null | undefined;

  @Attribute(DataTypes.STRING)
  declare ownerEmail: string | null | undefined;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare type: string;

  @Attribute(DataTypes.STRING)
  declare validFrom: string | undefined;

  @Attribute(DataTypes.STRING)
  declare validUpTo: string | undefined;

  @DeletedAt
  declare deletedAt: Date | null;

  @HasMany(() => EntryExitLog, {
    foreignKey: "identifierId",
    sourceKey: "identifierId",
  })
  declare entryExitLogs: NonAttribute<EntryExitLog[]>;
}
