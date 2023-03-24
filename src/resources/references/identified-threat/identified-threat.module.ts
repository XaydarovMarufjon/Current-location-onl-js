import { Module } from '@nestjs/common';
import { IdentifiedThreatService } from './identified-threat.service';
import { IdentifiedThreatController } from './identified-threat.controller';

@Module({
  controllers: [IdentifiedThreatController],
  providers: [IdentifiedThreatService]
})
export class IdentifiedThreatModule {}
