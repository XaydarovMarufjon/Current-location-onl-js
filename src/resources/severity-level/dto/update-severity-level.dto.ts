import { PartialType } from '@nestjs/mapped-types';
import { CreateSeverityLevelDto } from './create-severity-level.dto';

export class UpdateSeverityLevelDto extends PartialType(CreateSeverityLevelDto) {}
