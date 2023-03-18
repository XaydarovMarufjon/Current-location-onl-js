import { HarmfulDomain } from './../harmful-domain/entities/harmful-domain.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHarmfulDomainUriDto } from './dto/create-harmful-domain-uri.dto';
import { UpdateHarmfulDomainUriDto } from './dto/update-harmful-domain-uri.dto';

@Injectable()
export class HarmfulDomainUriService {
  constructor(private prisma: PrismaService) {}
async  create(createHarmfulDomainUriDto: CreateHarmfulDomainUriDto) {
    const harmfulDomainUri = await this.prisma.harmfulDomainUri.create({
      data : { 
        code : createHarmfulDomainUriDto.code , 
        organizationWebsite : createHarmfulDomainUriDto.organizationWebsite, 
        nameuz: createHarmfulDomainUriDto.nameuz,
        nameru: createHarmfulDomainUriDto.nameru,
        creatorId: createHarmfulDomainUriDto.creatorId,
        editorId: createHarmfulDomainUriDto.editorId,
        removerId: createHarmfulDomainUriDto.removerId,
        createdAt: createHarmfulDomainUriDto.createdAt,
        updatedAt: createHarmfulDomainUriDto.updatedAt
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

async update(id: string, data: UpdateHarmfulDomainUriDto): Promise<HarmfulDomain>{
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
