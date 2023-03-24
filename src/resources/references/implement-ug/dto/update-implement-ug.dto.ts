import { PartialType } from '@nestjs/mapped-types';
import { CreateImplementUgDto } from './create-implement-ug.dto';

export class UpdateImplementUgDto extends PartialType(CreateImplementUgDto) {}
