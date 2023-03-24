import { Module } from '@nestjs/common';
import { SortGravityService } from './sort-gravity.service';
import { SortGravityController } from './sort-gravity.controller';

@Module({
  controllers: [SortGravityController],
  providers: [SortGravityService]
})
export class SortGravityModule {}
