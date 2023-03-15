import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async signup(dto: AuthDto): Promise<any>  {
        const password = await this.hashData(dto.password);

        const newUser = await this.prisma.user.create({
            data: {
                username: dto.username,
                password
            }
        });

        const tokens = await this.getTokens(newUser.id, newUser.username)
        await this.updateRtHash(newUser.id, tokens.refresh_token)
        return newUser
    }

    async signin(dto: AuthDto): Promise<Tokens>  {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username
            },
        });
        if(!user) throw new ForbiddenException('Acces Danied');

        const passwordMatches = await bcrypt.compare(dto.password, user.password);
        if(!passwordMatches) throw new ForbiddenException('Access Danied');

        const tokens = await this.getTokens(user.id, user.username)
        await this.updateRtHash(user.id, tokens.refresh_token)
        return tokens
    }

    async logout(userId: string) {
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
        })
    }

    async refreshTokens(userId: string, rt: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            },
        });
        if(!user || !user.refreshToken) throw new ForbiddenException('Access Danied');

        const rtMatches = await bcrypt.compare(rt, user.refreshToken);
        if(!rtMatches) throw new ForbiddenException('Access Danied')

        const tokens = await this.getTokens(user.id, user.username)
        await this.updateRtHash(user.id, tokens.refresh_token)
        return tokens
    }

    async updateRtHash(userId: string, rt: string) {
        const hashedRt = await this.hashData(rt);
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                refreshToken: hashedRt
            }
        })
    }

    hashData(data: string) {
        return bcrypt.hash(data,10)
    }

    async getTokens(userId: string, username: string): Promise<Tokens> {
        const [at,rt] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username
                },
                {
                    secret: 'monitoring-at-secret',
                    expiresIn: 60 * 30 // 30 min
                }
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username
                },
                {
                    secret: 'monitoring-rt-secret',
                    expiresIn: 60 * 60 * 27 * 7
                }
            )
        ]);

        return {
            access_token: at,
            refresh_token: rt
        }
    }
}
