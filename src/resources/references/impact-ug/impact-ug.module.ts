import { Module } from '@nestjs/common';
import { ImpactUgService } from './impact-ug.service';
import { ImpactUgController } from './impact-ug.controller';

@Module({
  controllers: [ImpactUgController],
  providers: [ImpactUgService]
})
export class ImpactUgModule {}
