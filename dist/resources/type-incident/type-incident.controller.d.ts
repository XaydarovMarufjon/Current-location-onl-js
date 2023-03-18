import { TypeIncidentService } from './type-incident.service';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';
export declare class TypeIncidentController {
    private readonly typeIncidentService;
    constructor(typeIncidentService: TypeIncidentService);
    create(createTypeIncidentDto: CreateTypeIncidentDto): Promise<import(".prisma/client").TypeIncident>;
    findAll(): Promise<import("./entities/type-incident.entity").TypeIncident[]>;
    findOne(id: string): Promise<import("./entities/type-incident.entity").TypeIncident>;
    update(id: string, updateTypeIncidentDto: UpdateTypeIncidentDto): Promise<import("./entities/type-incident.entity").TypeIncident>;
    remove(id: string): Promise<import(".prisma/client").TypeIncident>;
}
