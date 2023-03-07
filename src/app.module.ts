import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './resources/employee/employee.module';
import { TestModule } from './resources/test/test.module';

@Module({
  imports: [AuthModule, PrismaModule, EmployeeModule, TestModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard
    }
  ],
})
export class AppModule {}
