import { SortGravity } from './entities/sort-gravity.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSortGravityDto } from './dto/create-sort-gravity.dto';
import { UpdateSortGravityDto } from './dto/update-sort-gravity.dto';

@Injectable()
export class SortGravityService {
  constructor(private prisma: PrismaService) {}
  async create(createSortGravityDto: CreateSortGravityDto) {
    const sortGravity = await this.prisma.sortGravity.create({
      data: { 
        code : createSortGravityDto.code, 
        incidentSeverity: createSortGravityDto.incidentSeverity,
        nameuz: createSortGravityDto.nameuz,
        nameru: createSortGravityDto.nameru,
        creatorId: createSortGravityDto.creatorId,
        editorId: createSortGravityDto.editorId,
        removerId: createSortGravityDto.removerId,
        createdAt: createSortGravityDto.createdAt,
        updatedAt: createSortGravityDto.updatedAt
      }
    })
  }

 
  async findAll(): Promise<SortGravity>{
    try {
      return await this.prisma.sortGravity.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<SortGravity | null> {
    try{
     return await this.prisma.sortGravity.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateSortGravityDto): Promise<SortGravity>{
   try {
      return await this.prisma.sortGravity.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.sortGravity.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
