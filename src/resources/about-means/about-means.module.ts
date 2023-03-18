import { Module } from '@nestjs/common';
import { AboutMeansService } from './about-means.service';
import { AboutMeansController } from './about-means.controller';

@Module({
  controllers: [AboutMeansController],
  providers: [AboutMeansService]
})
export class AboutMeansModule {}
