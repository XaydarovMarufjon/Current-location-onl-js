import { HarmfulDomain } from './entities/harmful-domain.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHarmfulDomainDto } from './dto/create-harmful-domain.dto';
import { UpdateHarmfulDomainDto } from './dto/update-harmful-domain.dto';

@Injectable()
export class HarmfulDomainService {
  constructor(private prisma: PrismaService) {}
async  create(createHarmfulDomainDto: CreateHarmfulDomainDto) {
  const harmfulDomain = await this.prisma.harmfulDomain.create({
    data  : { 
      hosting : createHarmfulDomainDto.hosting,
      domainSupport: createHarmfulDomainDto.domainSupport , 
        nameuz: createHarmfulDomainDto.nameuz,
        nameru: createHarmfulDomainDto.nameru,
        creatorId: createHarmfulDomainDto.creatorId,
        editorId: createHarmfulDomainDto.editorId,
        removerId: createHarmfulDomainDto.removerId,
    }
  })
  }

  async findAll(): Promise<HarmfulDomain>{
    try {
      return await this.prisma.harmfulDomain.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<HarmfulDomain | null> {
    try{
     return await this.prisma.harmfulDomain.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateHarmfulDomainDto): Promise<HarmfulDomain>{
   try {
      return await this.prisma.harmfulDomain.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.harmfulDomain.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
