import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorySiDto } from './create-category-si.dto';

export class UpdateCategorySiDto extends PartialType(CreateCategorySiDto) {}
