import { PrismaService } from './../../../prisma/prisma.service';
import { ImpactComponent } from './entities/impact-component.entity';
import { Injectable } from '@nestjs/common';
import { CreateImpactComponentDto } from './dto/create-impact-component.dto';
import { UpdateImpactComponentDto } from './dto/update-impact-component.dto';

@Injectable()
export class ImpactComponentService {
  constructor(private prisma: PrismaService) {}
async  create(createImpactComponentDto: CreateImpactComponentDto) {
  const impactComponent = await this.prisma.impactComponent.create({
    data: { 
      code : createImpactComponentDto.code, 
      impactComponents: createImpactComponentDto.impactComponents,
      nameuz: createImpactComponentDto.nameuz,
      nameru: createImpactComponentDto.nameru,
      creatorId: createImpactComponentDto.creatorId,
      editorId: createImpactComponentDto.editorId,
      removerId: createImpactComponentDto.removerId,
    }
  })
  }

 
  async findAll(): Promise<ImpactComponent>{
    try {
      return await this.prisma.impactComponent.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ImpactComponent | null> {
    try{
     return await this.prisma.impactComponent.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateImpactComponentDto): Promise<ImpactComponent>{
   try {
      return await this.prisma.impactComponent.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.impactComponent.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
