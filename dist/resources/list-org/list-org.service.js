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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrgService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ListOrgService = class ListOrgService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createListOrgDto) {
        const listorg = await this.prisma.listOrg.create({
            data: {
                name: createListOrgDto.name,
                nameuz: createListOrgDto.nameuz,
                nameru: createListOrgDto.nameru,
                creatorId: createListOrgDto.creatorId,
                editorId: createListOrgDto.editorId,
                removerId: createListOrgDto.removerId ? createListOrgDto.removerId : null
            }
        });
        return listorg;
    }
    findAll() {
        return `This action returns all listOrg`;
    }
    findOne(id) {
        return `This action returns a #${id} listOrg`;
    }
    update(id, updateListOrgDto) {
        return `This action updates a #${id} listOrg`;
    }
    remove(id) {
        return `This action removes a #${id} listOrg`;
    }
};
ListOrgService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListOrgService);
exports.ListOrgService = ListOrgService;
//# sourceMappingURL=list-org.service.js.map