import { AuthorizationUgModule } from './resources/references/authorization-ug/authorization-ug.module';
import { PresenceUgModule } from './resources/references/presence-ug/presence-ug.module';
import { EvaluationUgModule } from './resources/references/evaluation-ug/evaluation-ug.module';
import { ConsequencesUgModule } from './resources/references/consequences-ug/consequences-ug.module';
import { IdentifiedUgModule } from './resources/references/identified-ug/identified-ug.module';
import { ImplementUgModule } from './resources/references/implement-ug/implement-ug.module';
import { ExactTypeModule } from './resources/references/exact-type/exact-type.module';
import { ImpactUgModule } from './resources/references/impact-ug/impact-ug.module';
import { IdentificationUgModule } from './resources/references/identification-ug/identification-ug.module';
import { IdentifiedThreatModule } from './resources/references/identified-threat/identified-threat.module';
import { SubjectDamageModule } from './resources/references/subject-damage/subject-damage.module';
import { GroupComponentsModule } from './resources/references/group-components/group-components.module';
import { DetectedStatusModule } from './resources/references/detected-status/detected-status.module';
import { ListOrgModule } from './resources/list-org/list-org.module';
import { RoleModule } from './resources/role/role.module';
import { SubdepartmentModule } from './resources/subdepartment/subdepartment.module';
import { DepartmentModule } from './resources/department/department.module';
import { TestModule } from './resources/test/test.module';
import { HotLineModule } from './resources/references/hot-line/hot-line.module';
import { EditEmployeeNameModule } from './resources/references/edit-employee-name/edit-employee-name.module';
import { EmployeeNameModule } from './resources/references/employee-name/employee-name.module';
import { DamageFactorsModule } from './resources/references/damage-factors/damage-factors.module';
import { ConfidentialityModule } from './resources/references/confidentiality/confidentiality.module';
import { CurrentStatusModule } from './resources/references/current-status/current-status.module';
import { ResGeographyModule } from './resources/references/res-geography/res-geography.module';
import { TacticsViolatorModule } from './resources/references/tactics-violator/tactics-violator.module';
import { MethodViolatorModule } from './resources/references/method-violator/method-violator.module';
import { MotivationModule } from './resources/references/motivation/motivation.module';
import { ImpactComponentModule } from './resources/references/impact-component/impact-component.module';
import { TypeComponentsModule } from './resources/references/type-components/type-components.module';
import { ImpactObjectModule } from './resources/references/impact-object/impact-object.module';
import { AsDetectedModule } from './resources/references/as-detected/as-detected.module';
import { VulnerabilitiesModule } from './resources/references/vulnerabilities/vulnerabilities.module';
import { HarmfulDomainEmailModule } from './resources/references/harmful-domain-email/harmful-domain-email.module';
import { HarmfulDomainUriModule } from './resources/references/harmful-domain-uri/harmful-domain-uri.module';
import { AttackedDomainEmailModule } from './resources/references/attacked-domain-email/attacked-domain-email.module';
import { AttackedDomainUriModule } from './resources/references/attacked-domain-uri/attacked-domain-uri.module';
import { MarkLimitModule } from './resources/references/mark-limit/mark-limit.module';
import { SortGravityModule } from './resources/references/sort-gravity/sort-gravity.module';
import { SortForceModule } from './resources/references/sort-force/sort-force.module';
import { SeverityLevelModule } from './resources/references/severity-level/severity-level.module';
import { TypeIncidentModule } from './resources/references/type-incident/type-incident.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceSueModule } from './resources/references/service-sue/service-sue.module';
import { TypeComputerModule } from './resources/references/type-computer/type-computer.module';
import { AboutMeansModule } from './resources/references/about-means/about-means.module';
import { AttackedDomainModule } from './resources/references/attacked-domain/attacked-domain.module';
import { HarmfulDomainModule } from './resources/references/harmful-domain/harmful-domain.module';
import { TypicalThreatModule } from './resources/references/typical-threat/typical-threat.module';

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
    EditEmployeeNameModule,
    DetectedStatusModule,
    GroupComponentsModule,
    SubjectDamageModule,
    IdentifiedThreatModule,
    IdentificationUgModule,
    ImpactUgModule,
    ExactTypeModule,
    ImplementUgModule,
    IdentifiedUgModule,
    ConsequencesUgModule,
    EvaluationUgModule,
    PresenceUgModule,
    AuthorizationUgModule,
    

    
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
