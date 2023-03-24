import { PartialType } from '@nestjs/mapped-types';
import { CreateHarmfulDomainUriDto } from './create-harmful-domain-uri.dto';

export class UpdateHarmfulDomainUriDto extends PartialType(CreateHarmfulDomainUriDto) {}
