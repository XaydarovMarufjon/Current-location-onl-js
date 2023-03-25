import { PresenceUg } from './entities/presence-ug.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePresenceUgDto } from './dto/create-presence-ug.dto';
import { UpdatePresenceUgDto } from './dto/update-presence-ug.dto';

@Injectable()
export class PresenceUgService {
  constructor(private prisma: PrismaService) {}
async  create(createPresenceUgDto: CreatePresenceUgDto) {
  const PresenceUg = await this.prisma.presenceUG.create({
    data: { 
      code : createPresenceUgDto.code, 
      vulnerability: createPresenceUgDto.vulnerability,
      nameuz: createPresenceUgDto.nameuz,
      nameru: createPresenceUgDto.nameru,
      creatorId: createPresenceUgDto.creatorId,
      editorId: createPresenceUgDto.editorId,
      removerId: createPresenceUgDto.removerId,
    }
  })
  }

  async findAll(): Promise<PresenceUg>{
    try {
      return await this.prisma.presenceUG.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<PresenceUg | null> {
    try{
     return await this.prisma.presenceUG.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdatePresenceUgDto): Promise<PresenceUg>{
   try {
      return await this.prisma.presenceUG.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.presenceUG.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
