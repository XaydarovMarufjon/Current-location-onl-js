import { PartialType } from '@nestjs/mapped-types';
import { CreateSortForceDto } from './create-sort-force.dto';

export class UpdateSortForceDto extends PartialType(CreateSortForceDto) {}
