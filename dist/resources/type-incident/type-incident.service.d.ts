import { TypeIncident } from './entities/type-incident.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';
export declare class TypeIncidentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTypeIncidentDto: CreateTypeIncidentDto): Promise<import(".prisma/client").TypeIncident>;
    findAll(): Promise<TypeIncident[]>;
    findOne(id: string): Promise<TypeIncident | null>;
    update(id: string, data: UpdateTypeIncidentDto): Promise<TypeIncident>;
    remove(id: string): Promise<import(".prisma/client").TypeIncident>;
}
