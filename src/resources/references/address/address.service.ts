import { Address } from './entities/address.entity';
import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}
async  create(createAddressDto: CreateAddressDto) {
    const address = await this.prisma.address.create({
      data : { 
        houseNum: createAddressDto.houseNum, 
        flatNum : createAddressDto.flatNum, 
        homeNum: createAddressDto.homeNum, 
        postCode : createAddressDto.postCode, 
        geoLocation : createAddressDto.geoLocation, 
        moreInfo : createAddressDto.moreInfo, 
        continentId: createAddressDto.continent,
        countryId: createAddressDto.country,
        regionId: createAddressDto.region,
        districtId: createAddressDto.district,
        neighborhoodId: createAddressDto.neighborhood,
        creatorId: createAddressDto.creatorId,
        editorId: createAddressDto.editorId,
        removerId: createAddressDto.removerId
      }
    })
     return address;
  }

  async findAll(): Promise<Address>{
    try {
      return await this.prisma.address.findMany()
    } catch (error) {
      throw new Error(`barcha malumot chiqarishda xatolik`)
    }
  }
  
  async findOne(id: string) : Promise<Address | null> {    
    try{
     return await this.prisma.address.findUnique({
       where:{ id }
     });
    } catch (e) { 
      throw new Error(`Siz qidirgan ${id } boycha hech narsa topilmadi, xatolik ${e.message}`)
    }
 }

// async update(id: string, data: UpdateAddressDto): Promise<Address>{
//    try {
//       return await this.prisma.address.update({
//        where : {id} , 
//        data,
//       })
//    } catch (e) { 
//      throw new Error(`Yangilanishda xatolik bor id : ${id} , xatolik ${e.message}`)
//    }
//  }

async remove(id: string) {
    try {
      return await this.prisma.address.delete({
       where :  {id},
      })
    } catch (e) {
       throw new Error(`O'chirishda xatolik yuzaga keldi id : ${id} , xatolik ${e.message}`)
    }
 }
 
}
