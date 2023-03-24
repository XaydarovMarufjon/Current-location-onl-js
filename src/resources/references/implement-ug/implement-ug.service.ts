import { ImplementUg } from './entities/implement-ug.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateImplementUgDto } from './dto/create-implement-ug.dto';
import { UpdateImplementUgDto } from './dto/update-implement-ug.dto';

@Injectable()
export class ImplementUgService {
constructor(private prisma: PrismaService) {}
async  create(createImplementUgDto: CreateImplementUgDto) {
  const implementUg = await this.prisma.implementUg.create({
    data: { 
      name: createImplementUgDto.name,
      nameuz: createImplementUgDto.nameuz,
      nameru: createImplementUgDto.nameru,
      creatorId: createImplementUgDto.creatorId,
      editorId: createImplementUgDto.editorId,
      removerId: createImplementUgDto.removerId,
    }
  })
}

async findAll(): Promise<ImplementUg>{
    try {
      return await this.prisma.implementUg.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }
 
async findOne(id: string) : Promise<ImplementUg | null> {
    try{
     return await this.prisma.implementUg.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateImplementUgDto): Promise<ImplementUg>{
   try {
      return await this.prisma.implementUg.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.implementUg.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`) 
    }
  }
}