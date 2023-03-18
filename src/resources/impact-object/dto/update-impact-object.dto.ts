import { PartialType } from '@nestjs/mapped-types';
import { CreateImpactObjectDto } from './create-impact-object.dto';

export class UpdateImpactObjectDto extends PartialType(CreateImpactObjectDto) {}
