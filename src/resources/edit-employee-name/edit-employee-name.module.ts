import { Module } from '@nestjs/common';
import { EditEmployeeNameService } from './edit-employee-name.service';
import { EditEmployeeNameController } from './edit-employee-name.controller';

@Module({
  controllers: [EditEmployeeNameController],
  providers: [EditEmployeeNameService]
})
export class EditEmployeeNameModule {}
