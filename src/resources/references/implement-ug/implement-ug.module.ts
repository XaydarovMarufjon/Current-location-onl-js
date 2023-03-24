import { Module } from '@nestjs/common';
import { ImplementUgService } from './implement-ug.service';
import { ImplementUgController } from './implement-ug.controller';

@Module({
  controllers: [ImplementUgController],
  providers: [ImplementUgService]
})
export class ImplementUgModule {}
