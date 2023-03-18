import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceSueDto } from './create-service-sue.dto';

export class UpdateServiceSueDto extends PartialType(CreateServiceSueDto) {}
