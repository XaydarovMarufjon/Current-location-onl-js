import { Module } from '@nestjs/common';
import { SortForceService } from './sort-force.service';
import { SortForceController } from './sort-force.controller';

@Module({
  controllers: [SortForceController],
  providers: [SortForceService]
})
export class SortForceModule {}
