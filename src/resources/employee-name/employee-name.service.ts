import { EmployeeName } from './entities/employee-name.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateEmployeeNameDto } from './dto/create-employee-name.dto';
import { UpdateEmployeeNameDto } from './dto/update-employee-name.dto';

@Injectable()
export class EmployeeNameService {
  constructor(private prisma: PrismaService) {}
async  create(createEmployeeNameDto: CreateEmployeeNameDto) {
  const employeeName = await this.prisma.employeeName.create({
    data: { 
      code : createEmployeeNameDto.code, 
      fullName: createEmployeeNameDto.fullName,
      nameuz: createEmployeeNameDto.nameuz,
      nameru: createEmployeeNameDto.nameru,
      creatorId: createEmployeeNameDto.creatorId,
      editorId: createEmployeeNameDto.editorId,
      removerId: createEmployeeNameDto.removerId,
      createdAt: createEmployeeNameDto.createdAt,
      updatedAt: createEmployeeNameDto.updatedAt
    }
  })
  }

  async findAll(): Promise<EmployeeName>{
    try {
      return await this.prisma.employeeName.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<EmployeeName | null> {
    try{
     return await this.prisma.employeeName.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateEmployeeNameDto): Promise<EmployeeName>{
   try {
      return await this.prisma.employeeName.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.employeeName.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
