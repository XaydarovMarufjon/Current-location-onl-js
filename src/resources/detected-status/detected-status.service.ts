import { DetectedStatus } from './entities/detected-status.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDetectedStatusDto } from './dto/create-detected-status.dto';
import { UpdateDetectedStatusDto } from './dto/update-detected-status.dto';

@Injectable()
export class DetectedStatusService {
  constructor(private prisma: PrismaService) {}
  async create(createDetectedStatusDto: CreateDetectedStatusDto) {
  const detectedStatus = await this.prisma.detectedStatus.create({
    data: { 
      name : createDetectedStatusDto.name, 
      nameuz: createDetectedStatusDto.nameuz,
      nameru: createDetectedStatusDto.nameru,
      creatorId: createDetectedStatusDto.creatorId,
      editorId: createDetectedStatusDto.editorId,
      removerId: createDetectedStatusDto.removerId,
      createdAt: createDetectedStatusDto.createdAt,
      updatedAt: createDetectedStatusDto.updatedAt
    }
   })
  }

  async findAll(): Promise<DetectedStatus>{
    try {
      return await this.prisma.detectedStatus.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }
 
  async findOne(id: string) : Promise<DetectedStatus | null> {
    try{
     return await this.prisma.detectedStatus.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateDetectedStatusDto): Promise<DetectedStatus>{
   try {
      return await this.prisma.detectedStatus.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.detectedStatus.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
