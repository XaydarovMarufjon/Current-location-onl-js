import { Neighborhood } from './entities/neighborhood.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateNeighborhoodDto } from './dto/create-neighborhood.dto';
import { UpdateNeighborhoodDto } from './dto/update-neighborhood.dto';

@Injectable()
export class NeighborhoodService {
constructor(private prisma: PrismaService) {}
async  create(createNeighborhoodDto: CreateNeighborhoodDto) {
  const neighborhood = await this.prisma.neighborhood.create({
    data: { 
      name : createNeighborhoodDto.name, 
      nameuz: createNeighborhoodDto.nameuz,
      nameru: createNeighborhoodDto.nameru,
      creatorId: createNeighborhoodDto.creatorId,
      editorId: createNeighborhoodDto.editorId,
      removerId: createNeighborhoodDto.removerId,
    }
  })
  }

  async findAll(): Promise<Neighborhood>{
    try {
      return await this.prisma.neighborhood.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<Neighborhood | null> {
    try{
     return await this.prisma.neighborhood.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateNeighborhoodDto): Promise<Neighborhood>{
   try {
      return await this.prisma.neighborhood.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.neighborhood.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
