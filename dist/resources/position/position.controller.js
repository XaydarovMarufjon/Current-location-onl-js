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
exports.PositionController = void 0;
const common_1 = require("@nestjs/common");
const position_service_1 = require("./position.service");
const create_position_dto_1 = require("./dto/create-position.dto");
const update_position_dto_1 = require("./dto/update-position.dto");
const guards_1 = require("../../common/guards");
let PositionController = class PositionController {
    constructor(positionService) {
        this.positionService = positionService;
    }
    create(createPositionDto) {
        return this.positionService.create(createPositionDto);
    }
    findAll() {
        return this.positionService.findAll();
    }
    findOne(id) {
        return this.positionService.findOne(+id);
    }
    update(id, updatePositionDto) {
        return this.positionService.update(+id, updatePositionDto);
    }
    remove(id) {
        return this.positionService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.AtGuard),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_position_dto_1.CreatePositionDto]),
    __metadata("design:returntype", void 0)
], PositionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PositionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PositionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_position_dto_1.UpdatePositionDto]),
    __metadata("design:returntype", void 0)
], PositionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PositionController.prototype, "remove", null);
PositionController = __decorate([
    (0, common_1.Controller)('position'),
    __metadata("design:paramtypes", [position_service_1.PositionService])
], PositionController);
exports.PositionController = PositionController;
//# sourceMappingURL=position.controller.js.map