import { PrismaService } from './../../../prisma/prisma.service';
import { SeverityLevel } from './entities/severity-level.entity';
import { Injectable } from '@nestjs/common';
import { CreateSeverityLevelDto } from './dto/create-severity-level.dto';
import { UpdateSeverityLevelDto } from './dto/update-severity-level.dto';

@Injectable()
export class SeverityLevelService {
  constructor(private prisma: PrismaService) {}
  async create(createSeverityLevelDto: CreateSeverityLevelDto) {
    const severityLevel = await this.prisma.severityLevel.create({
      data: { 
        code : createSeverityLevelDto.code, 
        severityLevel : createSeverityLevelDto.severityLevel, 
        nameuz: createSeverityLevelDto.nameuz,
        nameru: createSeverityLevelDto.nameru,
        creatorId: createSeverityLevelDto.creatorId,
        editorId: createSeverityLevelDto.editorId,
        removerId: createSeverityLevelDto.removerId,
      }
    })
  }
  
  
  async findAll(): Promise<SeverityLevel>{
    try {
      return await this.prisma.severityLevel.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<SeverityLevel | null> {
    try{
     return await this.prisma.severityLevel.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateSeverityLevelDto): Promise<SeverityLevel>{
   try {
      return await this.prisma.severityLevel.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.severityLevel.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
