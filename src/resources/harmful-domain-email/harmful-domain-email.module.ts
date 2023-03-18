import { Module } from '@nestjs/common';
import { HarmfulDomainEmailService } from './harmful-domain-email.service';
import { HarmfulDomainEmailController } from './harmful-domain-email.controller';

@Module({
  controllers: [HarmfulDomainEmailController],
  providers: [HarmfulDomainEmailService]
})
export class HarmfulDomainEmailModule {}
