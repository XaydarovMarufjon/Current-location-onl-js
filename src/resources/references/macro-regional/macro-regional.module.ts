import { Module } from '@nestjs/common';
import { MacroRegionalService } from './macro-regional.service';
import { MacroRegionalController } from './macro-regional.controller';

@Module({
  controllers: [MacroRegionalController],
  providers: [MacroRegionalService]
})
export class MacroRegionalModule {}
