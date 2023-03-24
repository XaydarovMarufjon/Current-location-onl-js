import { Module } from '@nestjs/common';
import { ExactTypeService } from './exact-type.service';
import { ExactTypeController } from './exact-type.controller';

@Module({
  controllers: [ExactTypeController],
  providers: [ExactTypeService]
})
export class ExactTypeModule {}
