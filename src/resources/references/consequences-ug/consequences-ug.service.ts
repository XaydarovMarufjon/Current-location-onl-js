import { ConsequencesUg } from './entities/consequences-ug.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateConsequencesUgDto } from './dto/create-consequences-ug.dto';
import { UpdateConsequencesUgDto } from './dto/update-consequences-ug.dto';

@Injectable()
export class ConsequencesUgService {
constructor(private prisma: PrismaService) {}
async  create(createConsequencesUgDto: CreateConsequencesUgDto) {
  const consequencesUg = await this.prisma.consequencesUG.create({
    data: { 
      code : createConsequencesUgDto.code, 
      name: createConsequencesUgDto.name,
      nameuz: createConsequencesUgDto.nameuz,
      nameru: createConsequencesUgDto.nameru,
      creatorId: createConsequencesUgDto.creatorId,
      editorId: createConsequencesUgDto.editorId,
      removerId: createConsequencesUgDto.removerId,
    }
  })
  }

  
  async findAll(): Promise<ConsequencesUg>{
    try {
      return await this.prisma.consequencesUG.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ConsequencesUg | null> {
    try{
     return await this.prisma.consequencesUG.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateConsequencesUgDto): Promise<ConsequencesUg>{
   try {
      return await this.prisma.consequencesUG.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.consequencesUG.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
