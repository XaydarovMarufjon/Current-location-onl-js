import { PrismaService } from './../../../prisma/prisma.service';
import { CurrentStatus } from './entities/current-status.entity';
import { Injectable } from '@nestjs/common';
import { CreateCurrentStatusDto } from './dto/create-current-status.dto';
import { UpdateCurrentStatusDto } from './dto/update-current-status.dto';

@Injectable()
export class CurrentStatusService {
  constructor(private prisma: PrismaService) {}
async  create(createCurrentStatusDto: CreateCurrentStatusDto) {
  const currentStatus  = await this.prisma.currentStatus.create({
    data: { 
      code : createCurrentStatusDto.code, 
      nameStatus: createCurrentStatusDto.nameStatus,
      nameuz: createCurrentStatusDto.nameuz,
      nameru: createCurrentStatusDto.nameru,
      creatorId: createCurrentStatusDto.creatorId,
      editorId: createCurrentStatusDto.editorId,
      removerId: createCurrentStatusDto.removerId,
     
    }
  })
}


  async findAll(): Promise<CurrentStatus>{
    try {
      return await this.prisma.currentStatus.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }
 
  async findOne(id: string) : Promise<CurrentStatus | null> {
    try{
     return await this.prisma.currentStatus.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateCurrentStatusDto): Promise<CurrentStatus>{
   try {
      return await this.prisma.currentStatus.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.currentStatus.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
