import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeNameDto } from './create-employee-name.dto';

export class UpdateEmployeeNameDto extends PartialType(CreateEmployeeNameDto) {}
