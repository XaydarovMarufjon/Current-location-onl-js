import { Module } from '@nestjs/common';
import { ListOrgService } from './list-org.service';
import { ListOrgController } from './list-org.controller';

@Module({
  controllers: [ListOrgController],
  providers: [ListOrgService]
})
export class ListOrgModule {}
