"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePositionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_position_dto_1 = require("./create-position.dto");
class UpdatePositionDto extends (0, mapped_types_1.PartialType)(create_position_dto_1.CreatePositionDto) {
}
exports.UpdatePositionDto = UpdatePositionDto;
//# sourceMappingURL=update-position.dto.js.map