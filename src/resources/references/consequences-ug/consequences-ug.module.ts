import { Module } from '@nestjs/common';
import { ConsequencesUgService } from './consequences-ug.service';
import { ConsequencesUgController } from './consequences-ug.controller';

@Module({
  controllers: [ConsequencesUgController],
  providers: [ConsequencesUgService]
})
export class ConsequencesUgModule {}
