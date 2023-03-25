import { Module } from '@nestjs/common';
import { AuthorizationUgService } from './authorization-ug.service';
import { AuthorizationUgController } from './authorization-ug.controller';

@Module({
  controllers: [AuthorizationUgController],
  providers: [AuthorizationUgService]
})
export class AuthorizationUgModule {}
