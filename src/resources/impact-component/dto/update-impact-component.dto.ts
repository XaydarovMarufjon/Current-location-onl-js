import { PartialType } from '@nestjs/mapped-types';
import { CreateImpactComponentDto } from './create-impact-component.dto';

export class UpdateImpactComponentDto extends PartialType(CreateImpactComponentDto) {}
