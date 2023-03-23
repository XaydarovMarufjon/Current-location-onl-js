import { Module } from '@nestjs/common';
import { MotivationService } from './motivation.service';
import { MotivationController } from './motivation.controller';

@Module({
  controllers: [MotivationController],
  providers: [MotivationService]
})
export class MotivationModule {}
