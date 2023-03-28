import { GeographicalRegion } from './entities/geographical-region.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGeographicalRegionDto } from './dto/create-geographical-region.dto';
import { UpdateGeographicalRegionDto } from './dto/update-geographical-region.dto';

@Injectable()
export class GeographicalRegionService {
constructor(private prisma: PrismaService) {}
async  create(createGeographicalRegionDto: CreateGeographicalRegionDto) {
    const geographicalRegion = await this.prisma.geographicalRegion.create({
      data: { 
        code : createGeographicalRegionDto.code, 
        name: createGeographicalRegionDto.name,
        nameuz: createGeographicalRegionDto.nameuz,
        nameru: createGeographicalRegionDto.nameru,
        creatorId: createGeographicalRegionDto.creatorId,
        editorId: createGeographicalRegionDto.editorId,
        removerId: createGeographicalRegionDto.removerId,
      }
    })
  }

  async findAll(): Promise<GeographicalRegion>{
    try {
      return await this.prisma.geographicalRegion.findMany()
    } catch (error) {
      throw new Error(`geographicalRegion barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<GeographicalRegion | null> {
    try{
     return await this.prisma.geographicalRegion.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateGeographicalRegionDto): Promise<GeographicalRegion>{
   try {
      return await this.prisma.geographicalRegion.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.geographicalRegion.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
