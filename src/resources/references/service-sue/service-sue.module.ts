import { Module } from '@nestjs/common';
import { ServiceSueService } from './service-sue.service';
import { ServiceSueController } from './service-sue.controller';

@Module({
  controllers: [ServiceSueController],
  providers: [ServiceSueService]
})
export class ServiceSueModule {}
