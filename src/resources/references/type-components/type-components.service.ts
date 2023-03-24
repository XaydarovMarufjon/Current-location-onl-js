import { PrismaService } from './../../../prisma/prisma.service';
import { TypeComponent } from './entities/type-component.entity';
import { Injectable } from '@nestjs/common';
import { CreateTypeComponentDto } from './dto/create-type-component.dto';
import { UpdateTypeComponentDto } from './dto/update-type-component.dto';

@Injectable()
export class TypeComponentsService {
  constructor(private prisma: PrismaService) {}
async  create(createTypeComponentDto: CreateTypeComponentDto) {
  const typeComponents = await this.prisma.typeComponents.create({
    data: { 
      code : createTypeComponentDto.code, 
      name: createTypeComponentDto.name,
      nameuz: createTypeComponentDto.nameuz,
      nameru: createTypeComponentDto.nameru,
      creatorId: createTypeComponentDto.creatorId,
      editorId: createTypeComponentDto.editorId,
      removerId: createTypeComponentDto.removerId,
    }
  })
  }

  async findAll(): Promise<TypeComponent>{
    try {
      return await this.prisma.typeComponents.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<TypeComponent | null> {
    try{
     return await this.prisma.typeComponents.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateTypeComponentDto): Promise<TypeComponent>{
   try {
      return await this.prisma.typeComponents.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.typeComponents.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
