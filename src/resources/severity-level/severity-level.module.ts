import { Module } from '@nestjs/common';
import { SeverityLevelService } from './severity-level.service';
import { SeverityLevelController } from './severity-level.controller';

@Module({
  controllers: [SeverityLevelController],
  providers: [SeverityLevelService]
})
export class SeverityLevelModule {}
