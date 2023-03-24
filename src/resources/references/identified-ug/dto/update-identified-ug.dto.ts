import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentifiedUgDto } from './create-identified-ug.dto';

export class UpdateIdentifiedUgDto extends PartialType(CreateIdentifiedUgDto) {}
