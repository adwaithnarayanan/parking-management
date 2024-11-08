var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DataTypes, Model, } from "@sequelize/core";
import { Attribute, AutoIncrement, NotNull, PrimaryKey, } from "@sequelize/core/decorators-legacy";
export class Camera extends Model {
}
__decorate([
    Attribute(DataTypes.INTEGER),
    PrimaryKey,
    AutoIncrement,
    NotNull
], Camera.prototype, "id", void 0);
__decorate([
    Attribute(DataTypes.INTEGER),
    NotNull
], Camera.prototype, "cameraId", void 0);
__decorate([
    Attribute(DataTypes.STRING),
    NotNull
], Camera.prototype, "name", void 0);
__decorate([
    Attribute(DataTypes.INTEGER)
], Camera.prototype, "externalId", void 0);
__decorate([
    Attribute(DataTypes.BOOLEAN),
    NotNull
], Camera.prototype, "activated", void 0);
__decorate([
    Attribute(DataTypes.INTEGER),
    NotNull
], Camera.prototype, "deviceId", void 0);
__decorate([
    Attribute(DataTypes.STRING),
    NotNull
], Camera.prototype, "ip", void 0);
__decorate([
    Attribute(DataTypes.INTEGER),
    NotNull
], Camera.prototype, "port", void 0);
__decorate([
    Attribute(DataTypes.STRING),
    NotNull
], Camera.prototype, "label", void 0);
//# sourceMappingURL=camera.model.js.map