import { PrismaService } from './../../../prisma/prisma.service';
import { TacticsViolator } from './entities/tactics-violator.entity';
import { Injectable } from '@nestjs/common';
import { CreateTacticsViolatorDto } from './dto/create-tactics-violator.dto';
import { UpdateTacticsViolatorDto } from './dto/update-tactics-violator.dto';

@Injectable()
export class TacticsViolatorService {
  constructor(private prisma: PrismaService) {}
async  create(createTacticsViolatorDto: CreateTacticsViolatorDto) {
  const tacticsViolator = await this.prisma.tacticsViolator.create({
    data: { 
      code : createTacticsViolatorDto.code, 
      objectAttack: createTacticsViolatorDto.objectAttack,
      stages: createTacticsViolatorDto.stages,
      description: createTacticsViolatorDto.description,
      nameuz: createTacticsViolatorDto.nameuz,
      nameru: createTacticsViolatorDto.nameru,
      creatorId: createTacticsViolatorDto.creatorId,
      editorId: createTacticsViolatorDto.editorId,
      removerId: createTacticsViolatorDto.removerId,
    }
  })
  }

  async findAll(): Promise<TacticsViolator>{
    try {
      return await this.prisma.tacticsViolator.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<TacticsViolator | null> {
    try{
     return await this.prisma.tacticsViolator.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateTacticsViolatorDto): Promise<TacticsViolator>{
   try {
      return await this.prisma.tacticsViolator.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.tacticsViolator.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
