import { SubdepartmentService } from './subdepartment.service';
import { CreateSubdepartmentDto } from './dto/create-subdepartment.dto';
import { UpdateSubdepartmentDto } from './dto/update-subdepartment.dto';
export declare class SubdepartmentController {
    private readonly subdepartmentService;
    constructor(subdepartmentService: SubdepartmentService);
    create(createSubdepartmentDto: CreateSubdepartmentDto): Promise<import(".prisma/client").SubDepartment>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubdepartmentDto: UpdateSubdepartmentDto): string;
    remove(id: string): string;
}
