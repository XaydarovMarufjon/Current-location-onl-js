import { ImpactObject } from './entities/impact-object.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateImpactObjectDto } from './dto/create-impact-object.dto';
import { UpdateImpactObjectDto } from './dto/update-impact-object.dto';

@Injectable()
export class ImpactObjectService {
  constructor(private prisma: PrismaService) {}
async  create(createImpactObjectDto: CreateImpactObjectDto) {
  const impactObject = await this.prisma.impactObject.create({
    data: { 
      code : createImpactObjectDto.code, 
      objectsInfluence: createImpactObjectDto.objectsInfluence,
      nameuz: createImpactObjectDto.nameuz,
      nameru: createImpactObjectDto.nameru,
      creatorId: createImpactObjectDto.creatorId,
      editorId: createImpactObjectDto.editorId,
      removerId: createImpactObjectDto.removerId,
      createdAt: createImpactObjectDto.createdAt,
      updatedAt: createImpactObjectDto.updatedAt
    }
  })
  }

 
  async findAll(): Promise<ImpactObject>{
    try {
      return await this.prisma.impactObject.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ImpactObject | null> {
    try{
     return await this.prisma.impactObject.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateImpactObjectDto): Promise<ImpactObject>{
   try {
      return await this.prisma.impactObject.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.impactObject.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
