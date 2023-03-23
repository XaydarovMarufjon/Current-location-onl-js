import { Confidentiality } from './entities/confidentiality.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateConfidentialityDto } from './dto/create-confidentiality.dto';
import { UpdateConfidentialityDto } from './dto/update-confidentiality.dto';

@Injectable()
export class ConfidentialityService {
  constructor(private prisma: PrismaService) {}
async  create(createConfidentialityDto: CreateConfidentialityDto) {
  const confidentiality = await this.prisma.confidentiality.create({
    data: { 
      code : createConfidentialityDto.code, 
      name: createConfidentialityDto.name,
      nameuz: createConfidentialityDto.nameuz,
      nameru: createConfidentialityDto.nameru,
      creatorId: createConfidentialityDto.creatorId,
      editorId: createConfidentialityDto.editorId,
      removerId: createConfidentialityDto.removerId,
      
    }
  })
  }

  async findAll(): Promise<Confidentiality>{
    try {
      return await this.prisma.confidentiality.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<Confidentiality | null> {
    try{
     return await this.prisma.confidentiality.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateConfidentialityDto): Promise<Confidentiality>{
   try {
      return await this.prisma.confidentiality.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.confidentiality.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
