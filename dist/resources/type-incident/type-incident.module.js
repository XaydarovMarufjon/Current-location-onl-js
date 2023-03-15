"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeIncidentModule = void 0;
const common_1 = require("@nestjs/common");
const type_incident_service_1 = require("./type-incident.service");
const type_incident_controller_1 = require("./type-incident.controller");
let TypeIncidentModule = class TypeIncidentModule {
};
TypeIncidentModule = __decorate([
    (0, common_1.Module)({
        controllers: [type_incident_controller_1.TypeIncidentController],
        providers: [type_incident_service_1.TypeIncidentService]
    })
], TypeIncidentModule);
exports.TypeIncidentModule = TypeIncidentModule;
//# sourceMappingURL=type-incident.module.js.map