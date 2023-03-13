import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
export declare class TestService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTestDto: CreateTestDto): Promise<import(".prisma/client").Employee>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestDto: UpdateTestDto): string;
    remove(id: number): string;
    hashData(data: string): Promise<string>;
}
