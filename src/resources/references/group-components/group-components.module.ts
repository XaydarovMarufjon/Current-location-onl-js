import { Module } from '@nestjs/common';
import { GroupComponentsService } from './group-components.service';
import { GroupComponentsController } from './group-components.controller';

@Module({
  controllers: [GroupComponentsController],
  providers: [GroupComponentsService]
})
export class GroupComponentsModule {}
