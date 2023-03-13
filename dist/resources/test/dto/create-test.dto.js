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
exports.CreateTestDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
class CreateTestDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "organization", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateTestDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTestDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateTestDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "password", void 0);
exports.CreateTestDto = CreateTestDto;
//# sourceMappingURL=create-test.dto.js.map