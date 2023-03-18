import { PartialType } from '@nestjs/mapped-types';
import { CreateDetectedStatusDto } from './create-detected-status.dto';

export class UpdateDetectedStatusDto extends PartialType(CreateDetectedStatusDto) {}
