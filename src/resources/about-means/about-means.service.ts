import { AboutMean } from './entities/about-mean.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAboutMeanDto } from './dto/create-about-mean.dto';
import { UpdateAboutMeanDto } from './dto/update-about-mean.dto';

@Injectable()
export class AboutMeansService {
  constructor(private prisma: PrismaService){}
 async create(createAboutMeanDto: CreateAboutMeanDto) {
   const aboutMeans = await this.prisma.aboutMeans.create({
    data : {
      code: createAboutMeanDto.code,
      toolDetails: createAboutMeanDto.toolDetails, 
      nameuz: createAboutMeanDto.nameuz,
      nameru: createAboutMeanDto.nameru,
      creatorId: createAboutMeanDto.creatorId,
      editorId: createAboutMeanDto.editorId,
      removerId: createAboutMeanDto.removerId,
      createdAt: createAboutMeanDto.createdAt,
      updatedAt: createAboutMeanDto.updatedAt

    }
   })
  }

  async findAll(): Promise<AboutMean>{
    try {
      return await this.prisma.aboutMeans.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<AboutMean | null> {
    try{
     return await this.prisma.aboutMeans.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateAboutMeanDto): Promise<AboutMean>{
   try {
      return await this.prisma.aboutMeans.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.aboutMeans.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
