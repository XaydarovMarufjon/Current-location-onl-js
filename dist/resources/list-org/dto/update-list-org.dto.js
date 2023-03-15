"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateListOrgDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_list_org_dto_1 = require("./create-list-org.dto");
class UpdateListOrgDto extends (0, mapped_types_1.PartialType)(create_list_org_dto_1.CreateListOrgDto) {
}
exports.UpdateListOrgDto = UpdateListOrgDto;
//# sourceMappingURL=update-list-org.dto.js.map