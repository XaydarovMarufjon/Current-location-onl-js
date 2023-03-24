import { PartialType } from '@nestjs/mapped-types';
import { CreateAttackedDomainUriDto } from './create-attacked-domain-uri.dto';

export class UpdateAttackedDomainUriDto extends PartialType(CreateAttackedDomainUriDto) {}
