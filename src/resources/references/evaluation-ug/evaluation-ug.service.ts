import { EvaluationUg } from './entities/evaluation-ug.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateEvaluationUgDto } from './dto/create-evaluation-ug.dto';
import { UpdateEvaluationUgDto } from './dto/update-evaluation-ug.dto';

@Injectable()
export class EvaluationUgService {
constructor(private prisma: PrismaService) {}
async  create(createEvaluationUgDto: CreateEvaluationUgDto) {
  const evaluationUG = await this.prisma.evaluationUG.create({
    data: { 
      code : createEvaluationUgDto.code, 
      name: createEvaluationUgDto.name,
      nameuz: createEvaluationUgDto.nameuz,
      nameru: createEvaluationUgDto.nameru,
      creatorId: createEvaluationUgDto.creatorId,
      editorId: createEvaluationUgDto.editorId,
      removerId: createEvaluationUgDto.removerId,
    }
  })
  }

  async findAll(): Promise<EvaluationUg>{
    try {
      return await this.prisma.evaluationUG.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<EvaluationUg | null> {
    try{
     return await this.prisma.evaluationUG.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateEvaluationUgDto): Promise<EvaluationUg>{
   try {
      return await this.prisma.evaluationUG.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.evaluationUG.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
