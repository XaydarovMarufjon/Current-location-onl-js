import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<import(".prisma/client").Department>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: number): string;
}
