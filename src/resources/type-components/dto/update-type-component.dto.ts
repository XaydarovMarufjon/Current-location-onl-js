import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeComponentDto } from './create-type-component.dto';

export class UpdateTypeComponentDto extends PartialType(CreateTypeComponentDto) {}
