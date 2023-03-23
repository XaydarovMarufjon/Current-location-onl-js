import { DamageFactor } from './entities/damage-factor.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDamageFactorDto } from './dto/create-damage-factor.dto';
import { UpdateDamageFactorDto } from './dto/update-damage-factor.dto';

@Injectable()
export class DamageFactorsService {
  constructor(private prisma: PrismaService) {}
async create(createDamageFactorDto: CreateDamageFactorDto) {
  const damageFactors = await this.prisma.damageFactors.create({
    data: { 
      code : createDamageFactorDto.code, 
      name: createDamageFactorDto.name,
      nameuz: createDamageFactorDto.nameuz,
      nameru: createDamageFactorDto.nameru,
      creatorId: createDamageFactorDto.creatorId,
      editorId: createDamageFactorDto.editorId,
      removerId: createDamageFactorDto.removerId,
      createdAt: createDamageFactorDto.createdAt,
      updatedAt: createDamageFactorDto.updatedAt
    }
  })
  }

 
  async findAll(): Promise<DamageFactor>{
    try {
      return await this.prisma.damageFactors.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<DamageFactor | null> {
    try{
     return await this.prisma.damageFactors.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateDamageFactorDto): Promise<DamageFactor>{
   try {
      return await this.prisma.damageFactors.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.damageFactors.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
