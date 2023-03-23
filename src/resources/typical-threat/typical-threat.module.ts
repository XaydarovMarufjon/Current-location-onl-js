import { Module } from '@nestjs/common';
import { TypicalThreatService } from './typical-threat.service';
import { TypicalThreatController } from './typical-threat.controller';

@Module({
  controllers: [TypicalThreatController],
  providers: [TypicalThreatService]
})
export class TypicalThreatModule {}
