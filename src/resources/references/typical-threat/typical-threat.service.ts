import { PrismaService } from './../../../prisma/prisma.service';
import { TypicalThreat } from './entities/typical-threat.entity';
import { Injectable } from '@nestjs/common';
import { CreateTypicalThreatDto } from './dto/create-typical-threat.dto';
import { UpdateTypicalThreatDto } from './dto/update-typical-threat.dto';

@Injectable()
export class TypicalThreatService {
  constructor(private prisma: PrismaService) {}
async create(createTypicalThreatDto: CreateTypicalThreatDto) {
  const typicalThreat = await this.prisma.typicalThreat.create({
    data: { 
      gangTools : createTypicalThreatDto.gangTools, 
      toolType: createTypicalThreatDto.toolType,
      nameuz: createTypicalThreatDto.nameuz,
      nameru: createTypicalThreatDto.nameru,
      creatorId: createTypicalThreatDto.creatorId,
      editorId: createTypicalThreatDto.editorId,
      removerId: createTypicalThreatDto.removerId,
    }
  })
  }

 
  async findAll(): Promise<TypicalThreat>{
    try {
      return await this.prisma.typicalThreat.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<TypicalThreat | null> {
    try{
     return await this.prisma.typicalThreat.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateTypicalThreatDto): Promise<TypicalThreat>{
   try {
      return await this.prisma.typicalThreat.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.typicalThreat.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
