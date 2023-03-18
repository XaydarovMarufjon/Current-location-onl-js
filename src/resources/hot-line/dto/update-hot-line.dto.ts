import { PartialType } from '@nestjs/mapped-types';
import { CreateHotLineDto } from './create-hot-line.dto';

export class UpdateHotLineDto extends PartialType(CreateHotLineDto) {}
