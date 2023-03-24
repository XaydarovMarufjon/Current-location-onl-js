import { PartialType } from '@nestjs/mapped-types';
import { CreateConfidentialityDto } from './create-confidentiality.dto';

export class UpdateConfidentialityDto extends PartialType(CreateConfidentialityDto) {}
