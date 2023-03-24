import { IdentifiedUg } from './entities/identified-ug.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateIdentifiedUgDto } from './dto/create-identified-ug.dto';
import { UpdateIdentifiedUgDto } from './dto/update-identified-ug.dto';

@Injectable()
export class IdentifiedUgService {
  constructor(private prisma: PrismaService) {}
async  create(createIdentifiedUgDto: CreateIdentifiedUgDto) {
    const identifiedUg = await this.prisma.identifiedUg.create({
      data: { 
        description : createIdentifiedUgDto.description, 
        nameuz: createIdentifiedUgDto.nameuz,
        nameru: createIdentifiedUgDto.nameru,
        creatorId: createIdentifiedUgDto.creatorId,
        editorId: createIdentifiedUgDto.editorId,
        removerId: createIdentifiedUgDto.removerId,
      }
    })
  }

  async findAll(): Promise<IdentifiedUg>{
    try {
      return await this.prisma.identifiedUg.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<IdentifiedUg | null> {
    try{
     return await this.prisma.identifiedUg.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateIdentifiedUgDto): Promise<IdentifiedUg>{
   try {
      return await this.prisma.identifiedUg.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.identifiedUg.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
 
}
