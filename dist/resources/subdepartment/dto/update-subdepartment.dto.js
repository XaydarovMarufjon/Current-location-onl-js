"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubdepartmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_subdepartment_dto_1 = require("./create-subdepartment.dto");
class UpdateSubdepartmentDto extends (0, mapped_types_1.PartialType)(create_subdepartment_dto_1.CreateSubdepartmentDto) {
}
exports.UpdateSubdepartmentDto = UpdateSubdepartmentDto;
//# sourceMappingURL=update-subdepartment.dto.js.map