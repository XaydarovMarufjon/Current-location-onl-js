import { Module } from '@nestjs/common';
import { TacticsViolatorService } from './tactics-violator.service';
import { TacticsViolatorController } from './tactics-violator.controller';

@Module({
  controllers: [TacticsViolatorController],
  providers: [TacticsViolatorService]
})
export class TacticsViolatorModule {}
