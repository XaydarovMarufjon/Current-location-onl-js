import { Module } from '@nestjs/common';
import { ImpactObjectService } from './impact-object.service';
import { ImpactObjectController } from './impact-object.controller';

@Module({
  controllers: [ImpactObjectController],
  providers: [ImpactObjectService]
})
export class ImpactObjectModule {}
