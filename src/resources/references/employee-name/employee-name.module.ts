import { Module } from '@nestjs/common';
import { EmployeeNameService } from './employee-name.service';
import { EmployeeNameController } from './employee-name.controller';

@Module({
  controllers: [EmployeeNameController],
  providers: [EmployeeNameService]
})
export class EmployeeNameModule {}
