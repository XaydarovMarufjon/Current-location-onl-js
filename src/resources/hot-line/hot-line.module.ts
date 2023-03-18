import { Module } from '@nestjs/common';
import { HotLineService } from './hot-line.service';
import { HotLineController } from './hot-line.controller';

@Module({
  controllers: [HotLineController],
  providers: [HotLineService]
})
export class HotLineModule {}
