import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Injectable()
export class PositionService {
  constructor(private prisma: PrismaService){}
  async create(createPositionDto: CreatePositionDto) {
    const position = await this.prisma.position.create({
      data: {
        name: createPositionDto.name,
        nameuz: createPositionDto.nameuz,
        nameru: createPositionDto.nameru,
        listOrgId: createPositionDto.listOrgId
      }
    })
  }

  findAll() {
    return `This action returns all position`;
  }

  findOne(id: string) {
    return `This action returns a #${id} position`;
  }

  update(id: string, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: string) {
    return `This action removes a #${id} position`;
  }
}
