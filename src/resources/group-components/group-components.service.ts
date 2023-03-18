import { GroupComponent } from './entities/group-component.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGroupComponentDto } from './dto/create-group-component.dto';
import { UpdateGroupComponentDto } from './dto/update-group-component.dto';

@Injectable()
export class GroupComponentsService {
  constructor(private prisma: PrismaService) {}
async  create(createGroupComponentDto: CreateGroupComponentDto) {
    const groupComponents = await this.prisma.groupComponents.create({
      data: { 
        code : createGroupComponentDto.code, 
        nameGroup: createGroupComponentDto.nameGroup,
        nameuz: createGroupComponentDto.nameuz,
        nameru: createGroupComponentDto.nameru,
        creatorId: createGroupComponentDto.creatorId,
        editorId: createGroupComponentDto.editorId,
        removerId: createGroupComponentDto.removerId,
        createdAt: createGroupComponentDto.createdAt,   
        updatedAt: createGroupComponentDto.updatedAt
      }
    })
  }

 
  async findAll(): Promise<GroupComponent>{
    try {
      return await this.prisma.groupComponents.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<GroupComponent | null> {
    try{
     return await this.prisma.groupComponents.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateGroupComponentDto): Promise<GroupComponent>{
   try {
      return await this.prisma.groupComponents.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.groupComponents.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
