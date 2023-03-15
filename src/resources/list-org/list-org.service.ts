import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListOrgDto } from './dto/create-list-org.dto';
import { UpdateListOrgDto } from './dto/update-list-org.dto';

@Injectable()
export class ListOrgService {
  constructor(private prisma: PrismaService) {}

  async create(createListOrgDto: CreateListOrgDto) {
    const listorg = await this.prisma.listOrg.create({
      data: {
        name: createListOrgDto.name,
        nameuz: createListOrgDto.nameuz,
        nameru: createListOrgDto.nameru,
        creatorId: createListOrgDto.creatorId,
        editorId: createListOrgDto.editorId,
        removerId: createListOrgDto.removerId
      }
    });

    return listorg
  }

  findAll() {
    return `This action returns all listOrg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listOrg`;
  }

  update(id: number, updateListOrgDto: UpdateListOrgDto) {
    return `This action updates a #${id} listOrg`;
  }

  remove(id: number) {
    return `This action removes a #${id} listOrg`;
  }
}
