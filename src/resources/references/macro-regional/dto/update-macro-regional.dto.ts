import { PartialType } from '@nestjs/mapped-types';
import { CreateMacroRegionalDto } from './create-macro-regional.dto';

export class UpdateMacroRegionalDto extends PartialType(CreateMacroRegionalDto) {}
