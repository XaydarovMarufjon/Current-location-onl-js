import { Module } from '@nestjs/common';
import { IdentificationUgService } from './identification-ug.service';
import { IdentificationUgController } from './identification-ug.controller';

@Module({
  controllers: [IdentificationUgController],
  providers: [IdentificationUgService]
})
export class IdentificationUgModule {}
