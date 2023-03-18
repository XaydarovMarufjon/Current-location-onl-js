import { TypeIncident } from './entities/type-incident.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';

@Injectable()
export class TypeIncidentService {
    constructor(private prisma: PrismaService) {}
    async  create(createTypeIncidentDto: CreateTypeIncidentDto) {
      const typeIncident = await this.prisma.typeIncident.create({
      data: {
          name: createTypeIncidentDto.name,
          nameuz: createTypeIncidentDto.nameuz,
          nameru: createTypeIncidentDto.nameru,
          code: createTypeIncidentDto.code,
          vector: createTypeIncidentDto.vector,
          creatorId: createTypeIncidentDto.creatorId,
          editorId: createTypeIncidentDto.editorId,
          removerId: createTypeIncidentDto.removerId       
        }
      })
  
      return typeIncident
  }

 async findAll(): Promise<TypeIncident[]> {
    try {
      return await this.prisma.typeIncident.findMany();
    } catch (e) {
      throw new Error(`Failed to retrieve all TypeIncidents: ${e.message}`);
    }
  }


 async findOne(id: string) : Promise<TypeIncident | null> {
    try {
      return await this.prisma.typeIncident.findUnique({
        where: { id },
      });
    } catch (e) {
      throw new Error(`Failed to find TypeIncident with id ${id}: ${e.message}`);
    }
  }


  async  update(id: string, data: UpdateTypeIncidentDto) : Promise<TypeIncident>{
    try {
      return await this.prisma.typeIncident.update({
        where: { id },
        data,
      });
    } catch (e) {
      throw new Error(`Failed to update TypeIncident with id ${id}: ${e.message}`);
    }
   
  }


 async remove(id: string) {
    try {
      return await this.prisma.typeIncident.delete({
        where: { id },
      });
    } catch (e) {
      throw new Error(`Failed to remove TypeIncident with id ${id}: ${e.message}`);
    }
  }
}
