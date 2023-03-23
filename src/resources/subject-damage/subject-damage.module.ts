import { Module } from '@nestjs/common';
import { SubjectDamageService } from './subject-damage.service';
import { SubjectDamageController } from './subject-damage.controller';

@Module({
  controllers: [SubjectDamageController],
  providers: [SubjectDamageService]
})
export class SubjectDamageModule {}
