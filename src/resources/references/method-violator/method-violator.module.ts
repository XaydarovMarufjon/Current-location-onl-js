import { Module } from '@nestjs/common';
import { MethodViolatorService } from './method-violator.service';
import { MethodViolatorController } from './method-violator.controller';

@Module({
  controllers: [MethodViolatorController],
  providers: [MethodViolatorService]
})
export class MethodViolatorModule {}
