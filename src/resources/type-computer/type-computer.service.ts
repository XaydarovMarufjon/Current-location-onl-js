import { TypeComputer } from './entities/type-computer.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTypeComputerDto } from './dto/create-type-computer.dto';
import { UpdateTypeComputerDto } from './dto/update-type-computer.dto';

@Injectable()
export class TypeComputerService {
  constructor(private prisma: PrismaService){}
async create(createTypeComputerDto: CreateTypeComputerDto) {
    const typeComputer = await this.prisma.typeComputer.create({
       data:{
        incidentTypes: createTypeComputerDto.incidentTypes,
        code: createTypeComputerDto.code,
        vector: createTypeComputerDto.vector,
        nameuz: createTypeComputerDto.nameuz,
        nameru: createTypeComputerDto.nameru,
        creatorId: createTypeComputerDto.creatorId,
        editorId: createTypeComputerDto.editorId,
        removerId: createTypeComputerDto.removerId,
       }
    })
  }


  async findAll(): Promise<TypeComputer>{
    try {
      return await this.prisma.typeComputer.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<TypeComputer | null> {
    try{
     return await this.prisma.typeComputer.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateTypeComputerDto): Promise<TypeComputer>{
   try {
      return await this.prisma.typeComputer.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.typeComputer.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
