import { EditEmployeeNameModule } from './resources/edit-employee-name/edit-employee-name.module';
import { EmployeeNameModule } from './resources/employee-name/employee-name.module';
import { DamageFactorsModule } from './resources/damage-factors/damage-factors.module';
import { ConfidentialityModule } from './resources/confidentiality/confidentiality.module';
import { CurrentStatusModule } from './resources/current-status/current-status.module';
import { ResGeographyModule } from './resources/res-geography/res-geography.module';
import { TacticsViolatorModule } from './resources/tactics-violator/tactics-violator.module';
import { MethodViolatorModule } from './resources/method-violator/method-violator.module';
import { MotivationModule } from './resources/motivation/motivation.module';
import { ImpactComponentModule } from './resources/impact-component/impact-component.module';
import { TypeComponentsModule } from './resources/type-components/type-components.module';
import { ImpactObjectModule } from './resources/impact-object/impact-object.module';
import { AsDetectedModule } from './resources/as-detected/as-detected.module';
import { VulnerabilitiesModule } from './resources/vulnerabilities/vulnerabilities.module';
import { HarmfulDomainEmailModule } from './resources/harmful-domain-email/harmful-domain-email.module';
import { HarmfulDomainUriModule } from './resources/harmful-domain-uri/harmful-domain-uri.module';
import { AttackedDomainEmailModule } from './resources/attacked-domain-email/attacked-domain-email.module';
import { AttackedDomainUriModule } from './resources/attacked-domain-uri/attacked-domain-uri.module';
import { MarkLimitModule } from './resources/mark-limit/mark-limit.module';
import { SortGravityModule } from './resources/sort-gravity/sort-gravity.module';
import { SortForceModule } from './resources/sort-force/sort-force.module';
import { SeverityLevelModule } from './resources/severity-level/severity-level.module';
import { HotLineModule } from './resources/hot-line/hot-line.module';
import { TypeIncidentModule } from './resources/type-incident/type-incident.module';
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
import { ServiceSueModule } from './resources/service-sue/service-sue.module';
import { TypeComputerModule } from './resources/type-computer/type-computer.module';
import { AboutMeansModule } from './resources/about-means/about-means.module';
import { AttackedDomainModule } from './resources/attacked-domain/attacked-domain.module';
import { HarmfulDomainModule } from './resources/harmful-domain/harmful-domain.module';
import { TypicalThreatModule } from './resources/typical-threat/typical-threat.module';

@Module({
  imports: [
    AuthModule, 
    PrismaModule, 
    TestModule,
    DepartmentModule,
    SubdepartmentModule,
    RoleModule,
    ListOrgModule,
    TypeIncidentModule,
    HotLineModule,
    ServiceSueModule,
    TypeComputerModule,
    AboutMeansModule,
    SeverityLevelModule,
    SortForceModule, 
    SortGravityModule,
    MarkLimitModule,
    AttackedDomainModule,
    AttackedDomainUriModule,
    AttackedDomainEmailModule,
    HarmfulDomainModule,
    HarmfulDomainUriModule,
    HarmfulDomainEmailModule,
    VulnerabilitiesModule,
    AsDetectedModule,
    ImpactObjectModule, 
    TypeComponentsModule,
    ImpactComponentModule,
    MotivationModule,
    MethodViolatorModule,
    TacticsViolatorModule,
    TypicalThreatModule,
    ResGeographyModule,
    CurrentStatusModule,
    ConfidentialityModule,
    DamageFactorsModule,
    EmployeeNameModule,
    EditEmployeeNameModule
    
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
