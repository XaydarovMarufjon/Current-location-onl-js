import { PartialType } from '@nestjs/mapped-types';
import { CreateListOrgDto } from './create-list-org.dto';

export class UpdateListOrgDto extends PartialType(CreateListOrgDto) {}
