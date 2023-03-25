import { AuthorizationUg } from './entities/authorization-ug.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAuthorizationUgDto } from './dto/create-authorization-ug.dto';
import { UpdateAuthorizationUgDto } from './dto/update-authorization-ug.dto';

@Injectable()
export class AuthorizationUgService {
constructor(private prisma: PrismaService) {}
async  create(createAuthorizationUgDto: CreateAuthorizationUgDto) {
  const authorizationUG = await this.prisma.authorizationUG.create({
    data: { 
      code : createAuthorizationUgDto.code, 
      vulnerability: createAuthorizationUgDto.vulnerability,
      nameuz: createAuthorizationUgDto.nameuz,
      nameru: createAuthorizationUgDto.nameru,
      creatorId: createAuthorizationUgDto.creatorId,
      editorId: createAuthorizationUgDto.editorId,
      removerId: createAuthorizationUgDto.removerId,
    }
  })
  }

  async findAll(): Promise<AuthorizationUg>{
    try {
      return await this.prisma.authorizationUG.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<AuthorizationUg | null> {
    try{
     return await this.prisma.authorizationUG.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateAuthorizationUgDto): Promise<AuthorizationUg>{
   try {
      return await this.prisma.authorizationUG.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.authorizationUG.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
