import { PartialType } from '@nestjs/mapped-types';
import { CreateImpactUgDto } from './create-impact-ug.dto';

export class UpdateImpactUgDto extends PartialType(CreateImpactUgDto) {}
