import { Module } from '@nestjs/common';
import { HarmfulDomainUriService } from './harmful-domain-uri.service';
import { HarmfulDomainUriController } from './harmful-domain-uri.controller';

@Module({
  controllers: [HarmfulDomainUriController],
  providers: [HarmfulDomainUriService]
})
export class HarmfulDomainUriModule {}
