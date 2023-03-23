import { PartialType } from '@nestjs/mapped-types';
import { CreateDamageFactorDto } from './create-damage-factor.dto';

export class UpdateDamageFactorDto extends PartialType(CreateDamageFactorDto) {}
