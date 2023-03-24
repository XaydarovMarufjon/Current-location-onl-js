import { PartialType } from '@nestjs/mapped-types';
import { CreateTacticsViolatorDto } from './create-tactics-violator.dto';

export class UpdateTacticsViolatorDto extends PartialType(CreateTacticsViolatorDto) {}
