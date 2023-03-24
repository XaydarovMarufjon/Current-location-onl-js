import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentifiedThreatDto } from './create-identified-threat.dto';

export class UpdateIdentifiedThreatDto extends PartialType(CreateIdentifiedThreatDto) {}
