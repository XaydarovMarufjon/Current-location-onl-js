import { IdentificationUg } from './entities/identification-ug.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateIdentificationUgDto } from './dto/create-identification-ug.dto';
import { UpdateIdentificationUgDto } from './dto/update-identification-ug.dto';

@Injectable()
export class IdentificationUgService {
  constructor(private prisma: PrismaService) {}
async create(createIdentificationUgDto: CreateIdentificationUgDto) {
    const identificationUg = await this.prisma.identificationUg.create({
      data: { 
        identifierUBI : createIdentificationUgDto.identifierUBI, 
        nameUBI: createIdentificationUgDto.nameUBI,
        nameuz: createIdentificationUgDto.nameuz,
        nameru: createIdentificationUgDto.nameru,
        creatorId: createIdentificationUgDto.creatorId,
        editorId: createIdentificationUgDto.editorId,
        removerId: createIdentificationUgDto.removerId,
      }
    })
  }

  async findAll(): Promise<IdentificationUg>{
    try {
      return await this.prisma.identificationUg.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<IdentificationUg | null> {
    try{
     return await this.prisma.identificationUg.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateIdentificationUgDto): Promise<IdentificationUg>{
   try {
      return await this.prisma.identificationUg.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.identificationUg.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
