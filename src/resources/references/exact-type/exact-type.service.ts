import { ExactType } from './entities/exact-type.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateExactTypeDto } from './dto/create-exact-type.dto';
import { UpdateExactTypeDto } from './dto/update-exact-type.dto';

@Injectable()
export class ExactTypeService {
  constructor(private prisma: PrismaService) {}
async  create(createExactTypeDto: CreateExactTypeDto) {
  const exactType = await this.prisma.exactType.create({
    data: { 
      code : createExactTypeDto.code, 
      objectInfluence: createExactTypeDto.objectInfluence,
      nameuz: createExactTypeDto.nameuz,
      nameru: createExactTypeDto.nameru,
      creatorId: createExactTypeDto.creatorId,
      editorId: createExactTypeDto.editorId,
      removerId: createExactTypeDto.removerId,
    }
  })
  }

  async findAll(): Promise<ExactType>{
    try {
      return await this.prisma.exactType.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ExactType | null> {
    try{
     return await this.prisma.exactType.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateExactTypeDto): Promise<ExactType>{
   try {
      return await this.prisma.exactType.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.exactType.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
