"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListOrgDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
class CreateListOrgDto {
}
__decorate([
    (0, class_validator_1.MaxLength)(300),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateListOrgDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(300),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateListOrgDto.prototype, "nameuz", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(300),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateListOrgDto.prototype, "nameru", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateListOrgDto.prototype, "creatorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateListOrgDto.prototype, "editorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateListOrgDto.prototype, "removerId", void 0);
exports.CreateListOrgDto = CreateListOrgDto;
//# sourceMappingURL=create-list-org.dto.js.map