import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentificationUgDto } from './create-identification-ug.dto';

export class UpdateIdentificationUgDto extends PartialType(CreateIdentificationUgDto) {}
