import { AttackedDomainUri } from './entities/attacked-domain-uri.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAttackedDomainUriDto } from './dto/create-attacked-domain-uri.dto';
import { UpdateAttackedDomainUriDto } from './dto/update-attacked-domain-uri.dto';

@Injectable()
export class AttackedDomainUriService {
  constructor(private prisma: PrismaService) {}
async  create(createAttackedDomainUriDto: CreateAttackedDomainUriDto) {
  const attackedDomainUri = await this.prisma.attackedDomainUri.create({
    data: { 
      code : createAttackedDomainUriDto.code, 
      organizationWebsite: createAttackedDomainUriDto.organizationWebsite,
      nameuz: createAttackedDomainUriDto.nameuz,
      nameru: createAttackedDomainUriDto.nameru,
      creatorId: createAttackedDomainUriDto.creatorId,
      editorId: createAttackedDomainUriDto.editorId,
      removerId: createAttackedDomainUriDto.removerId,
      createdAt: createAttackedDomainUriDto.createdAt,
      updatedAt: createAttackedDomainUriDto.updatedAt
    }
  })
  }

  
  async findAll(): Promise<AttackedDomainUri>{
    try {
      return await this.prisma.attackedDomainUri.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<AttackedDomainUri | null> {
    try{
     return await this.prisma.attackedDomainUri.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateAttackedDomainUriDto): Promise<AttackedDomainUri>{
   try {
      return await this.prisma.attackedDomainUri.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.attackedDomainUri.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
