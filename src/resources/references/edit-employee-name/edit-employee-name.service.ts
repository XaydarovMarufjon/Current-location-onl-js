import { PrismaService } from './../../../prisma/prisma.service';
import { EditEmployeeName } from './entities/edit-employee-name.entity';
import { Injectable } from '@nestjs/common';
import { CreateEditEmployeeNameDto } from './dto/create-edit-employee-name.dto';
import { UpdateEditEmployeeNameDto } from './dto/update-edit-employee-name.dto';

@Injectable()
export class EditEmployeeNameService {
  constructor(private prisma: PrismaService) {}
async  create(createEditEmployeeNameDto: CreateEditEmployeeNameDto) {
  const editEmployeeName = await this.prisma.editEmployeeName.create({
    data: { 
      code : createEditEmployeeNameDto.code, 
      fullName: createEditEmployeeNameDto.fullName,
      nameuz: createEditEmployeeNameDto.nameuz,
      nameru: createEditEmployeeNameDto.nameru,
      creatorId: createEditEmployeeNameDto.creatorId,
      editorId: createEditEmployeeNameDto.editorId,
      removerId: createEditEmployeeNameDto.removerId,
    }
  })
  }

  
  async findAll(): Promise<EditEmployeeName>{
    try {
      return await this.prisma.editEmployeeName.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }


  async findOne(id: string) : Promise<EditEmployeeName | null> {
    try{
     return await this.prisma.editEmployeeName.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateEditEmployeeNameDto): Promise<EditEmployeeName>{
   try {
      return await this.prisma.editEmployeeName.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.editEmployeeName.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
