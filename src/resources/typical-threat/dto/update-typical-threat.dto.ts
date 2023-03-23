import { PartialType } from '@nestjs/mapped-types';
import { CreateTypicalThreatDto } from './create-typical-threat.dto';

export class UpdateTypicalThreatDto extends PartialType(CreateTypicalThreatDto) {}
