import { Module } from '@nestjs/common';
import { VulnerabilitiesService } from './vulnerabilities.service';
import { VulnerabilitiesController } from './vulnerabilities.controller';

@Module({
  controllers: [VulnerabilitiesController],
  providers: [VulnerabilitiesService]
})
export class VulnerabilitiesModule {}
