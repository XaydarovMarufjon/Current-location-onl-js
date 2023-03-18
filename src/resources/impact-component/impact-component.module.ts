import { Module } from '@nestjs/common';
import { ImpactComponentService } from './impact-component.service';
import { ImpactComponentController } from './impact-component.controller';

@Module({
  controllers: [ImpactComponentController],
  providers: [ImpactComponentService]
})
export class ImpactComponentModule {}
