import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectDamageDto } from './create-subject-damage.dto';

export class UpdateSubjectDamageDto extends PartialType(CreateSubjectDamageDto) {}
