import { City } from './entities/city.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
async  create(createCityDto: CreateCityDto) {
  const city = await this.prisma.city.create({
    data: { 
      cityName : createCityDto.cityName, 
      nameuz: createCityDto.nameuz,
      nameru: createCityDto.nameru,
      creatorId: createCityDto.creatorId,
      editorId: createCityDto.editorId,
      removerId: createCityDto.removerId,
    }
  })
}

  async findAll(): Promise<City>{
    try {
      return await this.prisma.city.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<City | null> {
    try{
     return await this.prisma.city.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateCityDto): Promise<City>{
   try {
      return await this.prisma.city.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.city.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}