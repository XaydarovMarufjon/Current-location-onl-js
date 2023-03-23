import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubdepartmentDto } from './dto/create-subdepartment.dto';
import { UpdateSubdepartmentDto } from './dto/update-subdepartment.dto';
export declare class SubdepartmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSubdepartmentDto: CreateSubdepartmentDto): Promise<import(".prisma/client").SubDepartment>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubdepartmentDto: UpdateSubdepartmentDto): string;
    remove(id: string): string;
}
