import { PartialType } from '@nestjs/mapped-types';
import { CreateHarmfulDomainEmailDto } from './create-harmful-domain-email.dto';

export class UpdateHarmfulDomainEmailDto extends PartialType(CreateHarmfulDomainEmailDto) {}
