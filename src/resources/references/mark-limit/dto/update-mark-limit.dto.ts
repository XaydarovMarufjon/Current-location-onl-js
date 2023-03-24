import { PartialType } from '@nestjs/mapped-types';
import { CreateMarkLimitDto } from './create-mark-limit.dto';

export class UpdateMarkLimitDto extends PartialType(CreateMarkLimitDto) {}
