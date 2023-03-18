import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHotLineDto } from './dto/create-hot-line.dto';
import { UpdateHotLineDto } from './dto/update-hot-line.dto';
import { HotLine } from './entities/hot-line.entity';

@Injectable()
export class HotLineService {

  constructor(private prisma: PrismaService) {}
  async  create(createHotLineDto: CreateHotLineDto) {
    const hotLine = await this.prisma.hotLine.create({
    data: {
        fullName: createHotLineDto.fullName,
        contact: createHotLineDto.contact,
        description: createHotLineDto.description,
        answer: createHotLineDto.answer,
        employeeId: createHotLineDto.employeeId,
        creatorId: createHotLineDto.creatorId,
        editorId: createHotLineDto.editorId,
        removerId: createHotLineDto.removerId       
      }
    })

    return hotLine
}

 async findAll(): Promise<HotLine[]>{
   try {
    return await this.prisma.hotLine.findMany()
   } catch (e){
      throw new Error(`Failed to retrieve all HotLine ${e.message}`)
   }
  }

 async findOne(id: string) : Promise<HotLine | null> {
     try{
      return await this.prisma.hotLine.findUnique({
        where:{ id }
      });
     } catch (e) { 
       throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
     }
  }

 async update(id: string, data: UpdateHotLineDto): Promise<HotLine>{
    try {
       return await this.prisma.hotLine.update({
        where : {id} , 
        data,
       })
    } catch (e) { 
      throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
    }
  }

 async remove(id: string) {
     try {
       return await this.prisma.hotLine.delete({
        where :  {id},
       })
     } catch (e) {
        throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
     }
  }
}
