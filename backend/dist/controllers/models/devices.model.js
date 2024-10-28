var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Sequelize, { DataTypes, Model, } from "@sequelize/core";
import { Attribute, AutoIncrement, CreatedAt, DeletedAt, NotNull, PrimaryKey, UpdatedAt, } from "@sequelize/core/decorators-legacy";
import { PostgresDialect } from "@sequelize/postgres";
import "dotenv/config";
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
const sequelize = new Sequelize({
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    models: [Device],
    dialect: PostgresDialect,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync();
}))();
//# sourceMappingURL=devices.model.js.map