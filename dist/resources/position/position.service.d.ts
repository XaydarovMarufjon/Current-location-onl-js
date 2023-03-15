import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
export declare class PositionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPositionDto: CreatePositionDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePositionDto: UpdatePositionDto): string;
    remove(id: number): string;
}
