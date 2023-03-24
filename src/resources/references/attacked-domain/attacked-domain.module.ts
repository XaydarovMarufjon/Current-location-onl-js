import { Module } from '@nestjs/common';
import { AttackedDomainService } from './attacked-domain.service';
import { AttackedDomainController } from './attacked-domain.controller';

@Module({
  controllers: [AttackedDomainController],
  providers: [AttackedDomainService]
})
export class AttackedDomainModule {}
