import { TypeIncidentService } from './type-incident.service';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';
export declare class TypeIncidentController {
    private readonly typeIncidentService;
    constructor(typeIncidentService: TypeIncidentService);
    create(createTypeIncidentDto: CreateTypeIncidentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTypeIncidentDto: UpdateTypeIncidentDto): string;
    remove(id: string): string;
}
