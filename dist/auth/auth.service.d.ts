import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signup(dto: AuthDto): Promise<any>;
    signin(dto: AuthDto): Promise<Tokens>;
    logout(userId: string): Promise<void>;
    refreshTokens(userId: string, rt: string): Promise<Tokens>;
    updateRtHash(userId: string, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(userId: string, username: string): Promise<Tokens>;
}
