import { Module } from '@nestjs/common';
import { SubdepartmentService } from './subdepartment.service';
import { SubdepartmentController } from './subdepartment.controller';

@Module({
  controllers: [SubdepartmentController],
  providers: [SubdepartmentService]
})
export class SubdepartmentModule {}
