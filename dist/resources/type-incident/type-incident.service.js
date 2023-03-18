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
exports.TypeIncidentService = void 0;
const prisma_service_1 = require("./../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let TypeIncidentService = class TypeIncidentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTypeIncidentDto) {
        const typeIncident = await this.prisma.typeIncident.create({
            data: {
                name: createTypeIncidentDto.name,
                nameuz: createTypeIncidentDto.nameuz,
                nameru: createTypeIncidentDto.nameru,
                code: createTypeIncidentDto.code,
                vector: createTypeIncidentDto.vector,
                creatorId: createTypeIncidentDto.creatorId,
                editorId: createTypeIncidentDto.editorId,
                removerId: createTypeIncidentDto.removerId
            }
        });
        return typeIncident;
    }
    async findAll() {
        try {
            return await this.prisma.typeIncident.findMany();
        }
        catch (e) {
            throw new Error(`Failed to retrieve all TypeIncidents: ${e.message}`);
        }
    }
    async findOne(id) {
        try {
            return await this.prisma.typeIncident.findUnique({
                where: { id },
            });
        }
        catch (e) {
            throw new Error(`Failed to find TypeIncident with id ${id}: ${e.message}`);
        }
    }
    async update(id, data) {
        try {
            return await this.prisma.typeIncident.update({
                where: { id },
                data,
            });
        }
        catch (e) {
            throw new Error(`Failed to update TypeIncident with id ${id}: ${e.message}`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.typeIncident.delete({
                where: { id },
            });
        }
        catch (e) {
            throw new Error(`Failed to remove TypeIncident with id ${id}: ${e.message}`);
        }
    }
};
TypeIncidentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TypeIncidentService);
exports.TypeIncidentService = TypeIncidentService;
//# sourceMappingURL=type-incident.service.js.map