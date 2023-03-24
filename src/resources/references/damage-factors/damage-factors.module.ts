import { Module } from '@nestjs/common';
import { DamageFactorsService } from './damage-factors.service';
import { DamageFactorsController } from './damage-factors.controller';

@Module({
  controllers: [DamageFactorsController],
  providers: [DamageFactorsService]
})
export class DamageFactorsModule {}
