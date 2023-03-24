import { Module } from '@nestjs/common';
import { IdentifiedUgService } from './identified-ug.service';
import { IdentifiedUgController } from './identified-ug.controller';

@Module({
  controllers: [IdentifiedUgController],
  providers: [IdentifiedUgService]
})
export class IdentifiedUgModule {}
