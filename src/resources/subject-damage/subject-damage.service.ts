import { SubjectDamage } from './entities/subject-damage.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSubjectDamageDto } from './dto/create-subject-damage.dto';
import { UpdateSubjectDamageDto } from './dto/update-subject-damage.dto';

@Injectable()
export class SubjectDamageService {
  constructor(private prisma: PrismaService) {}
async  create(createSubjectDamageDto: CreateSubjectDamageDto) {
  const subjectDamage = await this.prisma.subjectDamage.create({
    data: { 
      code : createSubjectDamageDto.code, 
      damage: createSubjectDamageDto.damage,
      nameuz: createSubjectDamageDto.nameuz,
      nameru: createSubjectDamageDto.nameru,
      creatorId: createSubjectDamageDto.creatorId,
      editorId: createSubjectDamageDto.editorId,
      removerId: createSubjectDamageDto.removerId,
      createdAt: createSubjectDamageDto.createdAt,
      updatedAt: createSubjectDamageDto.updatedAt
    }
  })
  }

 
  async findAll(): Promise<SubjectDamage>{
    try {
      return await this.prisma.subjectDamage.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<SubjectDamage | null> {
    try{
     return await this.prisma.subjectDamage.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateSubjectDamageDto): Promise<SubjectDamage>{
   try {
      return await this.prisma.subjectDamage.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.subjectDamage.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
