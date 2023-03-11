import { PartialType } from '@nestjs/mapped-types';
import { CreateSubdepartmentDto } from './create-subdepartment.dto';

export class UpdateSubdepartmentDto extends PartialType(CreateSubdepartmentDto) {}
