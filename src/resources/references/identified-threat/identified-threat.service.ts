import { IdentifiedThreat } from './entities/identified-threat.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateIdentifiedThreatDto } from './dto/create-identified-threat.dto';
import { UpdateIdentifiedThreatDto } from './dto/update-identified-threat.dto';

@Injectable()
export class IdentifiedThreatService {
  constructor(private prisma: PrismaService) {}
async  create(createIdentifiedThreatDto: CreateIdentifiedThreatDto) {
  const identifiedThreat = await this.prisma.identifiedThreat.create({
    data: { 
      code : createIdentifiedThreatDto.code, 
      threatSource: createIdentifiedThreatDto.threatSource,
      nameuz: createIdentifiedThreatDto.nameuz,
      nameru: createIdentifiedThreatDto.nameru,
      creatorId: createIdentifiedThreatDto.creatorId,
      editorId: createIdentifiedThreatDto.editorId,
      removerId: createIdentifiedThreatDto.removerId,
    }
  })
  }

 
  async findAll(): Promise<IdentifiedThreat>{
    try {
      return await this.prisma.identifiedThreat.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<IdentifiedThreat | null> {
    try{
     return await this.prisma.identifiedThreat.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateIdentifiedThreatDto): Promise<IdentifiedThreat>{
   try {
      return await this.prisma.identifiedThreat.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.identifiedThreat.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
