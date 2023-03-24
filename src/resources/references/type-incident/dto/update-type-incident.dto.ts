import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeIncidentDto } from './create-type-incident.dto';

export class UpdateTypeIncidentDto extends PartialType(CreateTypeIncidentDto) {}
