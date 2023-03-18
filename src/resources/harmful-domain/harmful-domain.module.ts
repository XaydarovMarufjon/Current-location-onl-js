import { Module } from '@nestjs/common';
import { HarmfulDomainService } from './harmful-domain.service';
import { HarmfulDomainController } from './harmful-domain.controller';

@Module({
  controllers: [HarmfulDomainController],
  providers: [HarmfulDomainService]
})
export class HarmfulDomainModule {}
