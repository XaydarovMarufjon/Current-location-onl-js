import { SortForce } from './entities/sort-force.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSortForceDto } from './dto/create-sort-force.dto';
import { UpdateSortForceDto } from './dto/update-sort-force.dto';

@Injectable()
export class SortForceService {
  constructor(private prisma: PrismaService){}
async  create(createSortForceDto: CreateSortForceDto) {
  const sortForce = await this.prisma.sortForce.create({
    data: {
      code: createSortForceDto.code, 
      incidentSeverity: createSortForceDto.incidentSeverity,
      nameuz: createSortForceDto.nameuz,
      nameru: createSortForceDto.nameru,
      creatorId: createSortForceDto.creatorId,
      editorId: createSortForceDto.editorId,
      removerId: createSortForceDto.removerId,
    }
  })
  }

  async findAll(): Promise<SortForce>{
    try {
      return await this.prisma.sortForce.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<SortForce | null> {
    try{
     return await this.prisma.sortForce.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateSortForceDto): Promise<SortForce>{
   try {
      return await this.prisma.sortForce.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.sortForce.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
