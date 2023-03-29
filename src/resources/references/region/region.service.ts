import { Region } from './entities/region.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}
 async create(createRegionDto: CreateRegionDto) {
  const region = await this.prisma.region.create({
    data: { 
      name : createRegionDto.name, 
      nameuz: createRegionDto.nameuz,
      nameru: createRegionDto.nameru,
      countryId: createRegionDto.country,
      creatorId: createRegionDto.creatorId,
      editorId: createRegionDto.editorId,
      removerId: createRegionDto.removerId,
    }
  })

  return region;
}

  async findAll(): Promise<Region>{
    try {
      return await this.prisma.region.findMany()
    } catch (error) {
      throw new Error(`Region barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<Region | null> {
    try{
     return await this.prisma.region.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

// async update(id: string, data: UpdateRegionDto): Promise<Region>{
//    try {
//       return await this.prisma.region.update({
//        where : {id} , 
//        data,
//       })
//    } catch (e) { 
//      throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
//    }
//  }

async remove(id: string) {
    try {
      return await this.prisma.region.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
