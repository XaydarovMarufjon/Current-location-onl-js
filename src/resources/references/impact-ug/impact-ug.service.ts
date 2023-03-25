import { ImpactUg } from './entities/impact-ug.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateImpactUgDto } from './dto/create-impact-ug.dto';
import { UpdateImpactUgDto } from './dto/update-impact-ug.dto';

@Injectable()
export class ImpactUgService {
  constructor(private prisma: PrismaService) {}
async  create(createImpactUgDto: CreateImpactUgDto) {
  const impactUg = await this.prisma.impactUG.create({
    data: { 
      code : createImpactUgDto.code, 
      nameUG: createImpactUgDto.nameUG,
      nameuz: createImpactUgDto.nameuz,
      nameru: createImpactUgDto.nameru,
      creatorId: createImpactUgDto.creatorId,
      editorId: createImpactUgDto.editorId,
      removerId: createImpactUgDto.removerId
    }
  })
  }

  async findAll(): Promise<ImpactUg>{
    try {
      return await this.prisma.impactUG.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ImpactUg | null> {
    try{
     return await this.prisma.impactUG.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateImpactUgDto): Promise<ImpactUg>{
   try {
      return await this.prisma.impactUG.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.impactUG.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
