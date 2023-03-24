import { PartialType } from '@nestjs/mapped-types';
import { CreateSortGravityDto } from './create-sort-gravity.dto';

export class UpdateSortGravityDto extends PartialType(CreateSortGravityDto) {}
