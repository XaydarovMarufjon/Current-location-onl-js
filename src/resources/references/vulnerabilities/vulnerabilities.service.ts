import { Vulnerability } from './entities/vulnerability.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateVulnerabilityDto } from './dto/create-vulnerability.dto';
import { UpdateVulnerabilityDto } from './dto/update-vulnerability.dto';

@Injectable()
export class VulnerabilitiesService {
  constructor(private prisma: PrismaService) {}
async create(createVulnerabilityDto: CreateVulnerabilityDto) {
  const vulnerability = await this.prisma.vulnerability.create({
    data: { 
      code : createVulnerabilityDto.code, 
      cellPhone: createVulnerabilityDto.cellPhone,
      nameuz: createVulnerabilityDto.nameuz,
      nameru: createVulnerabilityDto.nameru,
      creatorId: createVulnerabilityDto.creatorId,
      editorId: createVulnerabilityDto.editorId,
      removerId: createVulnerabilityDto.removerId,
    }
  })
  }

  async findAll(): Promise<Vulnerability>{
    try {
      return await this.prisma.vulnerability.findMany()
    } catch (error) {
      throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
    }
  }

 
  async findOne(id: string) : Promise<Vulnerability | null> {
    try{
     return await this.prisma.vulnerability.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

async update(id: string, data: UpdateVulnerabilityDto): Promise<Vulnerability>{
   try {
      return await this.prisma.vulnerability.update({
       where : {id} , 
       data,
      })
   } catch (e) { 
     throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
   }
 }

async remove(id: string) {
    try {
      return await this.prisma.vulnerability.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
}
