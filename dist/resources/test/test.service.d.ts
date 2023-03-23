import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
export declare class TestService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTestDto: CreateTestDto): Promise<import(".prisma/client").Employee>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTestDto: UpdateTestDto): string;
    remove(id: string): string;
    hashData(data: string): Promise<string>;
}
