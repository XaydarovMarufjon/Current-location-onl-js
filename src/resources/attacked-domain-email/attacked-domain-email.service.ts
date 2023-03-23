import { AttackedDomainEmail } from './entities/attacked-domain-email.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAttackedDomainEmailDto } from './dto/create-attacked-domain-email.dto';
import { UpdateAttackedDomainEmailDto } from './dto/update-attacked-domain-email.dto';

@Injectable()
export class AttackedDomainEmailService {
  constructor(private prisma: PrismaService) {}
async  create(createAttackedDomainEmailDto: CreateAttackedDomainEmailDto) {
    const attackedDomainEmail = await this.prisma.attackedDomainEmail.create({
      data :  {
         code : createAttackedDomainEmailDto.code , 
         email : createAttackedDomainEmailDto.email ,
         nameuz: createAttackedDomainEmailDto.nameuz,
         nameru: createAttackedDomainEmailDto.nameru,
         creatorId: createAttackedDomainEmailDto.creatorId,
         editorId: createAttackedDomainEmailDto.editorId,
         removerId: createAttackedDomainEmailDto.removerId,
      }
    })
  }


  async findAll(): Promise<AttackedDomainEmail>{
    try {
      return await this.prisma.attackedDomainEmail.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<AttackedDomainEmail | null> {
    try{
     return await this.prisma.attackedDomainEmail.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateAttackedDomainEmailDto): Promise<AttackedDomainEmail>{
   try {
      return await this.prisma.attackedDomainEmail.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.attackedDomainEmail.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
