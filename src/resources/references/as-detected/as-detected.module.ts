import { Module } from '@nestjs/common';
import { AsDetectedService } from './as-detected.service';
import { AsDetectedController } from './as-detected.controller';

@Module({
  controllers: [AsDetectedController],
  providers: [AsDetectedService]
})
export class AsDetectedModule {}
