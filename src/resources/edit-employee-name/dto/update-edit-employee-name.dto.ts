import { PartialType } from '@nestjs/mapped-types';
import { CreateEditEmployeeNameDto } from './create-edit-employee-name.dto';

export class UpdateEditEmployeeNameDto extends PartialType(CreateEditEmployeeNameDto) {}
