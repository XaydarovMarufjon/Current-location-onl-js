import { Module } from '@nestjs/common';
import { AttackedDomainEmailService } from './attacked-domain-email.service';
import { AttackedDomainEmailController } from './attacked-domain-email.controller';

@Module({
  controllers: [AttackedDomainEmailController],
  providers: [AttackedDomainEmailService]
})
export class AttackedDomainEmailModule {}
