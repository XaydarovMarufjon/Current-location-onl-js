import { Module } from '@nestjs/common';
import { AttackedDomainUriService } from './attacked-domain-uri.service';
import { AttackedDomainUriController } from './attacked-domain-uri.controller';

@Module({
  controllers: [AttackedDomainUriController],
  providers: [AttackedDomainUriService]
})
export class AttackedDomainUriModule {}
