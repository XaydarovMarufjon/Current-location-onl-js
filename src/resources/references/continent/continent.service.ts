import { PrismaService } from './../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';

@Injectable()
export class ContinentService {
  constructor(private prisma: PrismaService){}
  async create(createContinentDto: CreateContinentDto) {
    const result = await this.prisma.continent.create({
      data: {
        name: createContinentDto.name,
        nameru: createContinentDto.nameru,
        nameuz: createContinentDto.nameuz,
        code: createContinentDto.code,
        creatorId: createContinentDto.creatorId,
        editorId: createContinentDto.editorId,
        removerId: createContinentDto.removerId
      }
    });

    return result
  }

  async findAll() {
    let result;
    try {
      result = await this.prisma.continent.findMany()
    } catch (error) {
      return new Error(error)
    }
    return result
  }

  findOne(id: number) {
    return `This action returns a #${id} continent`;
  }

  update(id: number, updateContinentDto: UpdateContinentDto) {
    return `This action updates a #${id} continent`;
  }

  remove(id: number) {
    return `This action removes a #${id} continent`;
  }
}
