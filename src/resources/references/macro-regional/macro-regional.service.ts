import { MacroRegional } from './entities/macro-regional.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMacroRegionalDto } from './dto/create-macro-regional.dto';
import { UpdateMacroRegionalDto } from './dto/update-macro-regional.dto';

@Injectable()
export class MacroRegionalService {
constructor(private prisma: PrismaService) {}
async  create(createMacroRegionalDto: CreateMacroRegionalDto) {
  const macroRegional = await this.prisma.macroRegional.create({
    data: { 
      code : createMacroRegionalDto.code, 
      name: createMacroRegionalDto.name,
      nameuz: createMacroRegionalDto.nameuz,
      nameru: createMacroRegionalDto.nameru,
      creatorId: createMacroRegionalDto.creatorId,
      editorId: createMacroRegionalDto.editorId,
      removerId: createMacroRegionalDto.removerId,
    }
  })
  }

  async findAll(): Promise<MacroRegional>{
    try {
      return await this.prisma.macroRegional.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<MacroRegional | null> {
    try{
     return await this.prisma.macroRegional.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateMacroRegionalDto): Promise<MacroRegional>{
   try {
      return await this.prisma.macroRegional.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.macroRegional.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
