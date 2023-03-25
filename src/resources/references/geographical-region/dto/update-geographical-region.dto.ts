import { PartialType } from '@nestjs/mapped-types';
import { CreateGeographicalRegionDto } from './create-geographical-region.dto';

export class UpdateGeographicalRegionDto extends PartialType(CreateGeographicalRegionDto) {}
