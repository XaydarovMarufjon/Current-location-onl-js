import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHarmfulDomainDto } from './dto/create-harmful-domain.dto';
import { UpdateHarmfulDomainDto } from './dto/update-harmful-domain.dto';

@Injectable()
export class HarmfulDomainService {
  constructor(private prisma: PrismaService) {}
async  create(createHarmfulDomainDto: CreateHarmfulDomainDto) {
  const harmfulDomain = await this.prisma.harmfulDomain.create({
    data  : { 
      hosting : createHarmfulDomainDto.hosting,
      domainSupport: createHarmfulDomainDto.domainSupport , 
        nameuz: createHarmfulDomainDto.nameuz,
        nameru: createHarmfulDomainDto.nameru,
        creatorId: createHarmfulDomainDto.creatorId,
        editorId: createHarmfulDomainDto.editorId,
        removerId: createHarmfulDomainDto.removerId,
        createdAt: createHarmfulDomainDto.createdAt,
        updatedAt: createHarmfulDomainDto.updatedAt
    }
  })
  }

  findAll() {
    return `This action returns all harmfulDomain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} harmfulDomain`;
  }

  update(id: number, updateHarmfulDomainDto: UpdateHarmfulDomainDto) {
    return `This action updates a #${id} harmfulDomain`;
  }

  remove(id: number) {
    return `This action removes a #${id} harmfulDomain`;
  }
}
