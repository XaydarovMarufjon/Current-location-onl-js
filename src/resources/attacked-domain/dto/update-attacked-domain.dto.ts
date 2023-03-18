import { PartialType } from '@nestjs/mapped-types';
import { CreateAttackedDomainDto } from './create-attacked-domain.dto';

export class UpdateAttackedDomainDto extends PartialType(CreateAttackedDomainDto) {}
