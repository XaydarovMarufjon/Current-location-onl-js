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
exports.ListOrgController = void 0;
const guards_1 = require("../../common/guards");
const common_1 = require("@nestjs/common");
const list_org_service_1 = require("./list-org.service");
const create_list_org_dto_1 = require("./dto/create-list-org.dto");
const update_list_org_dto_1 = require("./dto/update-list-org.dto");
let ListOrgController = class ListOrgController {
    constructor(listOrgService) {
        this.listOrgService = listOrgService;
    }
    create(createListOrgDto) {
        return this.listOrgService.create(createListOrgDto);
    }
    findAll() {
        return this.listOrgService.findAll();
    }
    findOne(id) {
        return this.listOrgService.findOne(id);
    }
    update(id, updateListOrgDto) {
        return this.listOrgService.update(id, updateListOrgDto);
    }
    remove(id) {
        return this.listOrgService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.AtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_org_dto_1.CreateListOrgDto]),
    __metadata("design:returntype", void 0)
], ListOrgController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListOrgController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListOrgController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_list_org_dto_1.UpdateListOrgDto]),
    __metadata("design:returntype", void 0)
], ListOrgController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListOrgController.prototype, "remove", null);
ListOrgController = __decorate([
    (0, common_1.Controller)('list-org'),
    __metadata("design:paramtypes", [list_org_service_1.ListOrgService])
], ListOrgController);
exports.ListOrgController = ListOrgController;
//# sourceMappingURL=list-org.controller.js.map