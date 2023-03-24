import { Module } from '@nestjs/common';
import { TypeIncidentService } from './type-incident.service';
import { TypeIncidentController } from './type-incident.controller';

@Module({
  controllers: [TypeIncidentController],
  providers: [TypeIncidentService]
})
export class TypeIncidentModule {}
