import { PartialType } from '@nestjs/mapped-types';
import { CreateConsequencesUgDto } from './create-consequences-ug.dto';

export class UpdateConsequencesUgDto extends PartialType(CreateConsequencesUgDto) {}
