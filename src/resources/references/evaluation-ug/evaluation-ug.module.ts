import { Module } from '@nestjs/common';
import { EvaluationUgService } from './evaluation-ug.service';
import { EvaluationUgController } from './evaluation-ug.controller';

@Module({
  controllers: [EvaluationUgController],
  providers: [EvaluationUgService]
})
export class EvaluationUgModule {}
