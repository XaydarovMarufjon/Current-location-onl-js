import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeComputerDto } from './create-type-computer.dto';

export class UpdateTypeComputerDto extends PartialType(CreateTypeComputerDto) {}
