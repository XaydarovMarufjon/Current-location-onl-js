import { MethodViolator } from './entities/method-violator.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMethodViolatorDto } from './dto/create-method-violator.dto';
import { UpdateMethodViolatorDto } from './dto/update-method-violator.dto';

@Injectable()
export class MethodViolatorService {
  constructor(private prisma: PrismaService) {}
async  create(createMethodViolatorDto: CreateMethodViolatorDto) {
    const methodViolator = await this.prisma.methodViolator.create({
      data: { 
        techniqueCode : createMethodViolatorDto.techniqueCode, 
        nameTechnique: createMethodViolatorDto.nameTechnique,
        MITRECode: createMethodViolatorDto.MITRECode,
        nameuz: createMethodViolatorDto.nameuz,
        nameru: createMethodViolatorDto.nameru,
        creatorId: createMethodViolatorDto.creatorId,
        editorId: createMethodViolatorDto.editorId,
        removerId: createMethodViolatorDto.removerId,
        createdAt: createMethodViolatorDto.createdAt,
        updatedAt: createMethodViolatorDto.updatedAt
      }
    })
  }

 
  async findAll(): Promise<MethodViolator>{
    try {
      return await this.prisma.methodViolator.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<MethodViolator | null> {
    try{
     return await this.prisma.methodViolator.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateMethodViolatorDto): Promise<MethodViolator>{
   try {
      return await this.prisma.methodViolator.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.methodViolator.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
