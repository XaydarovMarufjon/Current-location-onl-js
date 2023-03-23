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
exports.SubdepartmentController = void 0;
const common_1 = require("@nestjs/common");
const subdepartment_service_1 = require("./subdepartment.service");
const create_subdepartment_dto_1 = require("./dto/create-subdepartment.dto");
const update_subdepartment_dto_1 = require("./dto/update-subdepartment.dto");
const guards_1 = require("../../common/guards");
let SubdepartmentController = class SubdepartmentController {
    constructor(subdepartmentService) {
        this.subdepartmentService = subdepartmentService;
    }
    create(createSubdepartmentDto) {
        return this.subdepartmentService.create(createSubdepartmentDto);
    }
    findAll() {
        return this.subdepartmentService.findAll();
    }
    findOne(id) {
        return this.subdepartmentService.findOne(id);
    }
    update(id, updateSubdepartmentDto) {
        return this.subdepartmentService.update(id, updateSubdepartmentDto);
    }
    remove(id) {
        return this.subdepartmentService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.AtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subdepartment_dto_1.CreateSubdepartmentDto]),
    __metadata("design:returntype", void 0)
], SubdepartmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubdepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubdepartmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subdepartment_dto_1.UpdateSubdepartmentDto]),
    __metadata("design:returntype", void 0)
], SubdepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubdepartmentController.prototype, "remove", null);
SubdepartmentController = __decorate([
    (0, common_1.Controller)('subdepartment'),
    __metadata("design:paramtypes", [subdepartment_service_1.SubdepartmentService])
], SubdepartmentController);
exports.SubdepartmentController = SubdepartmentController;
//# sourceMappingURL=subdepartment.controller.js.map