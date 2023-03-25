import { Module } from '@nestjs/common';
import { PresenceUgService } from './presence-ug.service';
import { PresenceUgController } from './presence-ug.controller';

@Module({
  controllers: [PresenceUgController],
  providers: [PresenceUgService]
})
export class PresenceUgModule {}
