import { PrismaService } from './../../../prisma/prisma.service';
import { District } from './entities/district.entity';
import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
constructor(private prisma: PrismaService) {}
async  create(createDistrictDto: CreateDistrictDto) {
    const district = await this.prisma.district.create({
      data: { 
        name : createDistrictDto.name, 
        region : createDistrictDto.regionId,
        nameuz: createDistrictDto.nameuz,
        nameru: createDistrictDto.nameru,
        creatorId: createDistrictDto.creatorId,
        editorId: createDistrictDto.editorId,
        removerId: createDistrictDto.removerId,
      }
    })
  }
  
    async findAll(): Promise<District>{
      try {
        return await this.prisma.district.findMany()
      } catch (error) {
        throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
      }
    }
  
   
    async findOne(id: string) : Promise<District | null> {
      try{
       return await this.prisma.district.findUnique({
         where:{ id }
       });
      } catch (e) { 
        throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
      }
   }
  
  async update(id: string, data: UpdateDistrictDto): Promise<District>{
     try {
        return await this.prisma.district.update({
         where : {id} , 
         data,
        })
     } catch (e) { 
       throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
     }
   }
  
  async remove(id: string) {
      try {
        return await this.prisma.district.delete({
         where :  {id},
        })
      } catch (e) {
         throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
      }
   }
  }
  