var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DataTypes, Model, } from "@sequelize/core";
import { Attribute, AutoIncrement, CreatedAt, DeletedAt, HasMany, NotNull, PrimaryKey, UpdatedAt, } from "@sequelize/core/decorators-legacy";
import { Camera } from "./camera.model.js";
export class Device extends Model {
}
__decorate([
    Attribute(DataTypes.INTEGER),
    PrimaryKey,
    AutoIncrement
], Device.prototype, "id", void 0);
__decorate([
    Attribute(DataTypes.STRING),
    NotNull
], Device.prototype, "label", void 0);
__decorate([
    Attribute(DataTypes.STRING),
    NotNull
], Device.prototype, "ip", void 0);
__decorate([
    Attribute(DataTypes.INTEGER),
    NotNull
], Device.prototype, "port", void 0);
__decorate([
    Attribute(DataTypes.INTEGER),
    NotNull
], Device.prototype, "dashboardPort", void 0);
__decorate([
    CreatedAt
], Device.prototype, "creationDate", void 0);
__decorate([
    UpdatedAt
], Device.prototype, "lastUpdateDate", void 0);
__decorate([
    DeletedAt
], Device.prototype, "deletionDate", void 0);
__decorate([
    HasMany(() => Camera, {
        foreignKey: "deviceId",
        sourceKey: "id",
    })
], Device.prototype, "cameras", void 0);
//# sourceMappingURL=devices.model.js.map