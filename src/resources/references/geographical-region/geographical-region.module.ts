import { Module } from '@nestjs/common';
import { GeographicalRegionService } from './geographical-region.service';
import { GeographicalRegionController } from './geographical-region.controller';

@Module({
  controllers: [GeographicalRegionController],
  providers: [GeographicalRegionService]
})
export class GeographicalRegionModule {}
