import { Module } from '@nestjs/common';
import { ResGeographyService } from './res-geography.service';
import { ResGeographyController } from './res-geography.controller';

@Module({
  controllers: [ResGeographyController],
  providers: [ResGeographyService]
})
export class ResGeographyModule {}
