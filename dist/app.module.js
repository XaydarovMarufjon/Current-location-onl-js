"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const hot_line_module_1 = require("./resources/hot-line/hot-line.module");
const type_incident_module_1 = require("./resources/type-incident/type-incident.module");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth/auth.module");
const guards_1 = require("./common/guards");
const prisma_module_1 = require("./prisma/prisma.module");
const department_module_1 = require("./resources/department/department.module");
const list_org_module_1 = require("./resources/list-org/list-org.module");
const role_module_1 = require("./resources/role/role.module");
const subdepartment_module_1 = require("./resources/subdepartment/subdepartment.module");
const test_module_1 = require("./resources/test/test.module");
const service_sue_module_1 = require("./resources/service-sue/service-sue.module");
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