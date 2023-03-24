import { MarkLimit } from './entities/mark-limit.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMarkLimitDto } from './dto/create-mark-limit.dto';
import { UpdateMarkLimitDto } from './dto/update-mark-limit.dto';

@Injectable()
export class MarkLimitService {
  constructor(private prisma: PrismaService) {}
  async  create(createMarkLimitDto: CreateMarkLimitDto) {
    const markLimit = await this.prisma.markLimit.create({
      data : {
        code : createMarkLimitDto.code,
        privacySymbol: createMarkLimitDto.privacySymbol,
        nameuz: createMarkLimitDto.nameuz,
        nameru: createMarkLimitDto.nameru,
        creatorId: createMarkLimitDto.creatorId,
        editorId: createMarkLimitDto.editorId,
        removerId: createMarkLimitDto.removerId,
      }
    })
  }

  
  async findAll(): Promise<MarkLimit>{
    try {
      return await this.prisma.markLimit.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<MarkLimit | null> {
    try{
     return await this.prisma.markLimit.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateMarkLimitDto): Promise<MarkLimit>{
   try {
      return await this.prisma.markLimit.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.markLimit.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
