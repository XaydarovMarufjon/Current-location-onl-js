import { Module } from '@nestjs/common';
import { DetectedStatusService } from './detected-status.service';
import { DetectedStatusController } from './detected-status.controller';

@Module({
  controllers: [DetectedStatusController],
  providers: [DetectedStatusService]
})
export class DetectedStatusModule {}
