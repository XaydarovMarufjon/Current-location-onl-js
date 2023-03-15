"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTypeIncidentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_type_incident_dto_1 = require("./create-type-incident.dto");
class UpdateTypeIncidentDto extends (0, mapped_types_1.PartialType)(create_type_incident_dto_1.CreateTypeIncidentDto) {
}
exports.UpdateTypeIncidentDto = UpdateTypeIncidentDto;
//# sourceMappingURL=update-type-incident.dto.js.map