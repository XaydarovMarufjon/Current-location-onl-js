"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeIncidentController = void 0;
const common_1 = require("@nestjs/common");
const type_incident_service_1 = require("./type-incident.service");
const create_type_incident_dto_1 = require("./dto/create-type-incident.dto");
const update_type_incident_dto_1 = require("./dto/update-type-incident.dto");
let TypeIncidentController = class TypeIncidentController {
    constructor(typeIncidentService) {
        this.typeIncidentService = typeIncidentService;
    }
    create(createTypeIncidentDto) {
        return this.typeIncidentService.create(createTypeIncidentDto);
    }
    findAll() {
        return this.typeIncidentService.findAll();
    }
    findOne(id) {
        return this.typeIncidentService.findOne(+id);
    }
    update(id, updateTypeIncidentDto) {
        return this.typeIncidentService.update(+id, updateTypeIncidentDto);
    }
    remove(id) {
        return this.typeIncidentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_incident_dto_1.CreateTypeIncidentDto]),
    __metadata("design:returntype", void 0)
], TypeIncidentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeIncidentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeIncidentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_type_incident_dto_1.UpdateTypeIncidentDto]),
    __metadata("design:returntype", void 0)
], TypeIncidentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeIncidentController.prototype, "remove", null);
TypeIncidentController = __decorate([
    (0, common_1.Controller)('type-incident'),
    __metadata("design:paramtypes", [type_incident_service_1.TypeIncidentService])
], TypeIncidentController);
exports.TypeIncidentController = TypeIncidentController;
//# sourceMappingURL=type-incident.controller.js.map