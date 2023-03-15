import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';
export declare class TypeIncidentService {
    create(createTypeIncidentDto: CreateTypeIncidentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTypeIncidentDto: UpdateTypeIncidentDto): string;
    remove(id: number): string;
}
