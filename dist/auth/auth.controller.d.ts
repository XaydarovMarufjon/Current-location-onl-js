import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<Tokens>;
    signin(dto: AuthDto): Promise<Tokens>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, refreshToken: string): Promise<Tokens>;
}
