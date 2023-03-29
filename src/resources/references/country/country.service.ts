import { PrismaService } from 'src/prisma/prisma.service';
import { Country } from './entities/country.entity';
import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
constructor(private prisma: PrismaService) {}
async  create(createCountryDto: CreateCountryDto) {
    const country = await this.prisma.country.create({
      data: { 
        digitalCode : createCountryDto.digitalCode, 
        name: createCountryDto.name,
        letterCountryCode: createCountryDto.letterCountryCode,
        continentId: createCountryDto.continent,
        nameuz: createCountryDto.nameuz,
        nameru: createCountryDto.nameru,
        creatorId: createCountryDto.creatorId,
        editorId: createCountryDto.editorId,
        removerId: createCountryDto.removerId,
      }
    })

    return country;
  }
  
    async findAll(): Promise<Country>{
      try {
        return await this.prisma.country.findMany()
      } catch (error) {
        throw new Error(`SerciseSUE barcha malumot chiqarishda xatolik `)
      }
    }
  
   
    async findOne(id: string) : Promise<Country | null> {
      try{
       return await this.prisma.country.findUnique({
         where:{ id }
       });
      } catch (e) { 
        throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
      }
   }
  
  // async update(id: string, data: UpdateCountryDto): Promise<Country>{
  //    try {
  //       return await this.prisma.country.update({
  //        where : {id} , 
  //        data,
  //       })
  //    } catch (e) { 
  //      throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
  //    }
  //  }
  
  async remove(id: string) {
      try {
        return await this.prisma.country.delete({
         where :  {id},
        })
      } catch (e) {
         throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
      }
   }
   
  }