import { Module } from '@nestjs/common';
import { CurrentStatusService } from './current-status.service';
import { CurrentStatusController } from './current-status.controller';

@Module({
  controllers: [CurrentStatusController],
  providers: [CurrentStatusService]
})
export class CurrentStatusModule {}
