import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizationUgDto } from './create-authorization-ug.dto';

export class UpdateAuthorizationUgDto extends PartialType(CreateAuthorizationUgDto) {}
