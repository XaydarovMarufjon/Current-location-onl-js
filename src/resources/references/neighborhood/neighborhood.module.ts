import { Module } from '@nestjs/common';
import { NeighborhoodService } from './neighborhood.service';
import { NeighborhoodController } from './neighborhood.controller';

@Module({
  controllers: [NeighborhoodController],
  providers: [NeighborhoodService]
})
export class NeighborhoodModule {}
