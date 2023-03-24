import { Motivation } from './entities/motivation.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMotivationDto } from './dto/create-motivation.dto';
import { UpdateMotivationDto } from './dto/update-motivation.dto';

@Injectable()
export class MotivationService {
  constructor(private prisma: PrismaService) {}
async  create(createMotivationDto: CreateMotivationDto) {
  const motivation = await this.prisma.motivation.create({
    data: { 
      code : createMotivationDto.code, 
      hackerGroups: createMotivationDto.hackerGroups,
      nameuz: createMotivationDto.nameuz,
      nameru: createMotivationDto.nameru,
      creatorId: createMotivationDto.creatorId,
      editorId: createMotivationDto.editorId,
      removerId: createMotivationDto.removerId,
    }
  })
  }

  async findAll(): Promise<Motivation>{
    try {
      return await this.prisma.motivation.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<Motivation | null> {
    try{
     return await this.prisma.motivation.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateMotivationDto): Promise<Motivation>{
   try {
      return await this.prisma.motivation.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.motivation.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
