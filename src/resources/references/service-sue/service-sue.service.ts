import { ServiceSue } from './entities/service-sue.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateServiceSueDto } from './dto/create-service-sue.dto';
import { UpdateServiceSueDto } from './dto/update-service-sue.dto';

@Injectable()
export class ServiceSueService {
 constructor(private prisma: PrismaService) {}
 async create(createServiceSueDto: CreateServiceSueDto) {
    const serviceSue = await this.prisma.serviceSue.create({
      data: { 
        name : createServiceSueDto.name, 
        nameuz: createServiceSueDto.nameuz,
        nameru: createServiceSueDto.nameru,
        creatorId: createServiceSueDto.creatorId,
        editorId: createServiceSueDto.editorId,
        removerId: createServiceSueDto.removerId,
      }
    })
  }

 async findAll(): Promise<ServiceSue>{
    try {
      return await this.prisma.serviceSue.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<ServiceSue | null> {
    try{
     return await this.prisma.serviceSue.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateServiceSueDto): Promise<ServiceSue>{
   try {
      return await this.prisma.serviceSue.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.serviceSue.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
