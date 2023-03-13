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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let TestService = class TestService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTestDto) {
        const result = await this.prisma.$transaction(async (prisma) => {
            const password = await this.hashData(createTestDto.password);
            const userData = {
                username: createTestDto.username,
                password
            };
            const user = await prisma.user.create({
                data: userData
            });
            const employee = await prisma.employee.create({
                data: {
                    fullName: createTestDto.fullName,
                    organization: createTestDto.organization,
                    departmentId: createTestDto.department,
                    position: createTestDto.position,
                    email: createTestDto.email,
                    phone: createTestDto.phone,
                    roleId: createTestDto.role,
                    photo: createTestDto.photo,
                    userId: user.id
                }
            });
            return employee;
        });
        return result;
    }
    findAll() {
        return `This action returns all test`;
    }
    findOne(id) {
        return `This action returns a #${id} test`;
    }
    update(id, updateTestDto) {
        return `This action updates a #${id} test`;
    }
    remove(id) {
        return `This action removes a #${id} test`;
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
};
TestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map