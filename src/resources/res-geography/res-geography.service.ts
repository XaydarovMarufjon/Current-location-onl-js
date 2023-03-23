import { ResGeography } from './entities/res-geography.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateResGeographyDto } from './dto/create-res-geography.dto';
import { UpdateResGeographyDto } from './dto/update-res-geography.dto';

@Injectable()
export class ResGeographyService {
  constructor(private prisma: PrismaService) {}
async  create(createResGeographyDto: CreateResGeographyDto) {
  const resGeography = await this.prisma.resGeography.create({
    data: { 
      code : createResGeographyDto.code, 
      geographicregions: createResGeographyDto.geographicregions,
      nameuz: createResGeographyDto.nameuz,
      nameru: createResGeographyDto.nameru,
      creatorId: createResGeographyDto.creatorId,
      editorId: createResGeographyDto.editorId,
      removerId: createResGeographyDto.removerId,
      createdAt: createResGeographyDto.createdAt,
      updatedAt: createResGeographyDto.updatedAt
    }
  })
  }

  async findAll(): Promise<ResGeography>{
    try {
      return await this.prisma.resGeography.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ResGeography | null> {
    try{
     return await this.prisma.resGeography.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateResGeographyDto): Promise<ResGeography>{
   try {
      return await this.prisma.resGeography.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.resGeography.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
