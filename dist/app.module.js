"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const continent_module_1 = require("./resources/references/continent/continent.module");
const address_module_1 = require("./resources/references/address/address.module");
const neighborhood_module_1 = require("./resources/references/neighborhood/neighborhood.module");
const district_module_1 = require("./resources/references/district/district.module");
const region_module_1 = require("./resources/references/region/region.module");
const country_module_1 = require("./resources/references/country/country.module");
const authorization_ug_module_1 = require("./resources/references/authorization-ug/authorization-ug.module");
const presence_ug_module_1 = require("./resources/references/presence-ug/presence-ug.module");
const evaluation_ug_module_1 = require("./resources/references/evaluation-ug/evaluation-ug.module");
const consequences_ug_module_1 = require("./resources/references/consequences-ug/consequences-ug.module");
const identified_ug_module_1 = require("./resources/references/identified-ug/identified-ug.module");
const implement_ug_module_1 = require("./resources/references/implement-ug/implement-ug.module");
const exact_type_module_1 = require("./resources/references/exact-type/exact-type.module");
const impact_ug_module_1 = require("./resources/references/impact-ug/impact-ug.module");
const identification_ug_module_1 = require("./resources/references/identification-ug/identification-ug.module");
const identified_threat_module_1 = require("./resources/references/identified-threat/identified-threat.module");
const subject_damage_module_1 = require("./resources/references/subject-damage/subject-damage.module");
const group_components_module_1 = require("./resources/references/group-components/group-components.module");
const detected_status_module_1 = require("./resources/references/detected-status/detected-status.module");
const list_org_module_1 = require("./resources/list-org/list-org.module");
const role_module_1 = require("./resources/role/role.module");
const subdepartment_module_1 = require("./resources/subdepartment/subdepartment.module");
const department_module_1 = require("./resources/department/department.module");
const test_module_1 = require("./resources/test/test.module");
const hot_line_module_1 = require("./resources/references/hot-line/hot-line.module");
const edit_employee_name_module_1 = require("./resources/references/edit-employee-name/edit-employee-name.module");
const employee_name_module_1 = require("./resources/references/employee-name/employee-name.module");
const damage_factors_module_1 = require("./resources/references/damage-factors/damage-factors.module");
const confidentiality_module_1 = require("./resources/references/confidentiality/confidentiality.module");
const current_status_module_1 = require("./resources/references/current-status/current-status.module");
const res_geography_module_1 = require("./resources/references/res-geography/res-geography.module");
const tactics_violator_module_1 = require("./resources/references/tactics-violator/tactics-violator.module");
const method_violator_module_1 = require("./resources/references/method-violator/method-violator.module");
const motivation_module_1 = require("./resources/references/motivation/motivation.module");
const impact_component_module_1 = require("./resources/references/impact-component/impact-component.module");
const type_components_module_1 = require("./resources/references/type-components/type-components.module");
const impact_object_module_1 = require("./resources/references/impact-object/impact-object.module");
const as_detected_module_1 = require("./resources/references/as-detected/as-detected.module");
const vulnerabilities_module_1 = require("./resources/references/vulnerabilities/vulnerabilities.module");
const harmful_domain_email_module_1 = require("./resources/references/harmful-domain-email/harmful-domain-email.module");
const harmful_domain_uri_module_1 = require("./resources/references/harmful-domain-uri/harmful-domain-uri.module");
const attacked_domain_email_module_1 = require("./resources/references/attacked-domain-email/attacked-domain-email.module");
const attacked_domain_uri_module_1 = require("./resources/references/attacked-domain-uri/attacked-domain-uri.module");
const mark_limit_module_1 = require("./resources/references/mark-limit/mark-limit.module");
const sort_gravity_module_1 = require("./resources/references/sort-gravity/sort-gravity.module");
const sort_force_module_1 = require("./resources/references/sort-force/sort-force.module");
const severity_level_module_1 = require("./resources/references/severity-level/severity-level.module");
const type_incident_module_1 = require("./resources/references/type-incident/type-incident.module");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth/auth.module");
const guards_1 = require("./common/guards");
const prisma_module_1 = require("./prisma/prisma.module");
const service_sue_module_1 = require("./resources/references/service-sue/service-sue.module");
const type_computer_module_1 = require("./resources/references/type-computer/type-computer.module");
const about_means_module_1 = require("./resources/references/about-means/about-means.module");
const attacked_domain_module_1 = require("./resources/references/attacked-domain/attacked-domain.module");
const harmful_domain_module_1 = require("./resources/references/harmful-domain/harmful-domain.module");
const typical_threat_module_1 = require("./resources/references/typical-threat/typical-threat.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            test_module_1.TestModule,
            department_module_1.DepartmentModule,
            subdepartment_module_1.SubdepartmentModule,
            role_module_1.RoleModule,
            list_org_module_1.ListOrgModule,
            type_incident_module_1.TypeIncidentModule,
            hot_line_module_1.HotLineModule,
            service_sue_module_1.ServiceSueModule,
            type_computer_module_1.TypeComputerModule,
            about_means_module_1.AboutMeansModule,
            severity_level_module_1.SeverityLevelModule,
            sort_force_module_1.SortForceModule,
            sort_gravity_module_1.SortGravityModule,
            mark_limit_module_1.MarkLimitModule,
            attacked_domain_module_1.AttackedDomainModule,
            attacked_domain_uri_module_1.AttackedDomainUriModule,
            attacked_domain_email_module_1.AttackedDomainEmailModule,
            harmful_domain_module_1.HarmfulDomainModule,
            harmful_domain_uri_module_1.HarmfulDomainUriModule,
            harmful_domain_email_module_1.HarmfulDomainEmailModule,
            vulnerabilities_module_1.VulnerabilitiesModule,
            as_detected_module_1.AsDetectedModule,
            impact_object_module_1.ImpactObjectModule,
            type_components_module_1.TypeComponentsModule,
            impact_component_module_1.ImpactComponentModule,
            motivation_module_1.MotivationModule,
            method_violator_module_1.MethodViolatorModule,
            tactics_violator_module_1.TacticsViolatorModule,
            typical_threat_module_1.TypicalThreatModule,
            res_geography_module_1.ResGeographyModule,
            current_status_module_1.CurrentStatusModule,
            confidentiality_module_1.ConfidentialityModule,
            damage_factors_module_1.DamageFactorsModule,
            employee_name_module_1.EmployeeNameModule,
            edit_employee_name_module_1.EditEmployeeNameModule,
            detected_status_module_1.DetectedStatusModule,
            group_components_module_1.GroupComponentsModule,
            subject_damage_module_1.SubjectDamageModule,
            identified_threat_module_1.IdentifiedThreatModule,
            identification_ug_module_1.IdentificationUgModule,
            impact_ug_module_1.ImpactUgModule,
            exact_type_module_1.ExactTypeModule,
            implement_ug_module_1.ImplementUgModule,
            identified_ug_module_1.IdentifiedUgModule,
            consequences_ug_module_1.ConsequencesUgModule,
            evaluation_ug_module_1.EvaluationUgModule,
            presence_ug_module_1.PresenceUgModule,
            authorization_ug_module_1.AuthorizationUgModule,
            country_module_1.CountryModule,
            region_module_1.RegionModule,
            district_module_1.DistrictModule,
            neighborhood_module_1.NeighborhoodModule,
            address_module_1.AddressModule,
            continent_module_1.ContinentModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: guards_1.AtGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map