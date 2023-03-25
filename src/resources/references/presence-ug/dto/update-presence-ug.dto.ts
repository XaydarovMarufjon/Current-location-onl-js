import { PartialType } from '@nestjs/mapped-types';
import { CreatePresenceUgDto } from './create-presence-ug.dto';

export class UpdatePresenceUgDto extends PartialType(CreatePresenceUgDto) {}
