import { PartialType } from '@nestjs/mapped-types';
import { CreateAsDetectedDto } from './create-as-detected.dto';

export class UpdateAsDetectedDto extends PartialType(CreateAsDetectedDto) {}
