import { AttackedDomain } from './entities/attacked-domain.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAttackedDomainDto } from './dto/create-attacked-domain.dto';
import { UpdateAttackedDomainDto } from './dto/update-attacked-domain.dto';

@Injectable()
export class AttackedDomainService {
  constructor(private prisma: PrismaService) {}
async  create(createAttackedDomainDto: CreateAttackedDomainDto) {
    const attackedDomain = await this.prisma.attackedDomain.create({
      data: { 
        hosting : createAttackedDomainDto.hosting, 
        domainSupport: createAttackedDomainDto.domainSupport,
        nameuz: createAttackedDomainDto.nameuz,
        nameru: createAttackedDomainDto.nameru,
        creatorId: createAttackedDomainDto.creatorId,
        editorId: createAttackedDomainDto.editorId,
        removerId: createAttackedDomainDto.removerId,
        createdAt: createAttackedDomainDto.createdAt,
        updatedAt: createAttackedDomainDto.updatedAt
      }
    })
  }

  
  async findAll(): Promise<AttackedDomain>{
    try {
      return await this.prisma.attackedDomain.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }
 
  async findOne(id: string) : Promise<AttackedDomain | null> {
    try{
     return await this.prisma.attackedDomain.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateAttackedDomainDto): Promise<AttackedDomain>{
   try {
      return await this.prisma.attackedDomain.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.attackedDomain.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
