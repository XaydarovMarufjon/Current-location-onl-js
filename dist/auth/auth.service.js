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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async signup(dto) {
        const password = await this.hashData(dto.password);
        const newUser = await this.prisma.user.create({
            data: {
                username: dto.username,
                password
            }
        });
        const tokens = await this.getTokens(newUser.id, newUser.username);
        await this.updateRtHash(newUser.id, tokens.refresh_token);
        return newUser;
    }
    async signin(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username
            },
        });
        if (!user)
            throw new common_1.ForbiddenException('Acces Danied');
        const passwordMatches = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatches)
            throw new common_1.ForbiddenException('Access Danied');
        const tokens = await this.getTokens(user.id, user.username);
        await this.updateRtHash(user.id, tokens.refresh_token);
        return tokens;
    }
    async logout(userId) {
        await this.prisma.user.updateMany({
            where: {
                id: userId,
                refreshToken: {
                    not: null,
                },
            },
            data: {
                refreshToken: null
            }
        });
    }
    async refreshTokens(userId, rt) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            },
        });
        if (!user || !user.refreshToken)
            throw new common_1.ForbiddenException('Access Danied');
        const rtMatches = await bcrypt.compare(rt, user.refreshToken);
        if (!rtMatches)
            throw new common_1.ForbiddenException('Access Danied');
        const tokens = await this.getTokens(user.id, user.username);
        await this.updateRtHash(user.id, tokens.refresh_token);
        return tokens;
    }
    async updateRtHash(userId, rt) {
        const hashedRt = await this.hashData(rt);
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                refreshToken: hashedRt
            }
        });
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getTokens(userId, username) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                username
            }, {
                secret: 'monitoring-at-secret',
                expiresIn: 60 * 15
            }),
            this.jwtService.signAsync({
                sub: userId,
                username
            }, {
                secret: 'monitoring-rt-secret',
                expiresIn: 60 * 60 * 27 * 7
            })
        ]);
        return {
            access_token: at,
            refresh_token: rt
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map