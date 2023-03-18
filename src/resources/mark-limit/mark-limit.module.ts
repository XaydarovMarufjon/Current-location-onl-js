import { Module } from '@nestjs/common';
import { MarkLimitService } from './mark-limit.service';
import { MarkLimitController } from './mark-limit.controller';

@Module({
  controllers: [MarkLimitController],
  providers: [MarkLimitService]
})
export class MarkLimitModule {}
