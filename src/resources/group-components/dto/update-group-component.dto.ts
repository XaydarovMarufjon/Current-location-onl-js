import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupComponentDto } from './create-group-component.dto';

export class UpdateGroupComponentDto extends PartialType(CreateGroupComponentDto) {}
