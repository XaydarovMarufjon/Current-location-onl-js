import { PartialType } from '@nestjs/mapped-types';
import { CreateAttackedDomainEmailDto } from './create-attacked-domain-email.dto';

export class UpdateAttackedDomainEmailDto extends PartialType(CreateAttackedDomainEmailDto) {}
