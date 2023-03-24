import { PartialType } from '@nestjs/mapped-types';
import { CreateExactTypeDto } from './create-exact-type.dto';

export class UpdateExactTypeDto extends PartialType(CreateExactTypeDto) {}
