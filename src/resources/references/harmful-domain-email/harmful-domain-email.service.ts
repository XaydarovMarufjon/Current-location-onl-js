import { HarmfulDomainEmail } from './entities/harmful-domain-email.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { HarmfulDomain } from './../harmful-domain/entities/harmful-domain.entity';
import { Injectable } from '@nestjs/common';
import { CreateHarmfulDomainEmailDto } from './dto/create-harmful-domain-email.dto';
import { UpdateHarmfulDomainEmailDto } from './dto/update-harmful-domain-email.dto';

@Injectable()
export class HarmfulDomainEmailService {
  constructor(private prisma: PrismaService) {}
async  create(createHarmfulDomainEmailDto: CreateHarmfulDomainEmailDto) {
  const harmfulDomainEmail = await this.prisma.harmfulDomainEmail.create({
    data: { 
      code : createHarmfulDomainEmailDto.code, 
      email: createHarmfulDomainEmailDto.email,
      nameuz: createHarmfulDomainEmailDto.nameuz,
      nameru: createHarmfulDomainEmailDto.nameru,
      creatorId: createHarmfulDomainEmailDto.creatorId,
      editorId: createHarmfulDomainEmailDto.editorId,
      removerId: createHarmfulDomainEmailDto.removerId
    }
  })
  }


  async findAll(): Promise<HarmfulDomainEmail>{
    try {
      return await this.prisma.harmfulDomainEmail.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<HarmfulDomainEmail | null> {
    try{
     return await this.prisma.harmfulDomainEmail.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateHarmfulDomainEmailDto): Promise<HarmfulDomainEmail>{
   try {
      return await this.prisma.harmfulDomainEmail.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.harmfulDomainEmail.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
