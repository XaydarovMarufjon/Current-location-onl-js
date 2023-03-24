import { PartialType } from '@nestjs/mapped-types';
import { CreateMethodViolatorDto } from './create-method-violator.dto';

export class UpdateMethodViolatorDto extends PartialType(CreateMethodViolatorDto) {}
