import { PrismaService } from './../../../prisma/prisma.service';
import { AsDetected } from './entities/as-detected.entity';
import { Injectable } from '@nestjs/common';
import { CreateAsDetectedDto } from './dto/create-as-detected.dto';
import { UpdateAsDetectedDto } from './dto/update-as-detected.dto';

@Injectable()
export class AsDetectedService {
  constructor(private prisma: PrismaService) {}
async  create(createAsDetectedDto: CreateAsDetectedDto) {
    const asDetected = await this.prisma.asDetected.create({
      data :  {
        name : createAsDetectedDto.name, 
        nameuz: createAsDetectedDto.nameuz,
        nameru: createAsDetectedDto.nameru,
        creatorId: createAsDetectedDto.creatorId,
        editorId: createAsDetectedDto.editorId,
        removerId: createAsDetectedDto.removerId,
      }
    })
  }

  async findAll(): Promise<AsDetected>{
    try {
      return await this.prisma.asDetected.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<AsDetected | null> {
    try{
     return await this.prisma.asDetected.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateAsDetectedDto): Promise<AsDetected>{
   try {
      return await this.prisma.asDetected.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.asDetected.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
