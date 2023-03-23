import { PartialType } from '@nestjs/mapped-types';
import { CreateResGeographyDto } from './create-res-geography.dto';

export class UpdateResGeographyDto extends PartialType(CreateResGeographyDto) {}
