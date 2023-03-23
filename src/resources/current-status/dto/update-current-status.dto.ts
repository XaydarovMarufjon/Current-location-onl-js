import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrentStatusDto } from './create-current-status.dto';

export class UpdateCurrentStatusDto extends PartialType(CreateCurrentStatusDto) {}
