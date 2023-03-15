import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentModule } from './resources/department/department.module';
import { ListOrgModule } from './resources/list-org/list-org.module';
import { RoleModule } from './resources/role/role.module';
import { SubdepartmentModule } from './resources/subdepartment/subdepartment.module';
import { TestModule } from './resources/test/test.module';

@Module({
  imports: [
    AuthModule, 
    PrismaModule, 
    TestModule,
    DepartmentModule,
    SubdepartmentModule,
    RoleModule,
    ListOrgModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard
    }
  ],
})
export class AppModule {}
