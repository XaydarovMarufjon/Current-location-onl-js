import { PartialType } from '@nestjs/mapped-types';
import { CreateHarmfulDomainDto } from './create-harmful-domain.dto';

export class UpdateHarmfulDomainDto extends PartialType(CreateHarmfulDomainDto) {}
