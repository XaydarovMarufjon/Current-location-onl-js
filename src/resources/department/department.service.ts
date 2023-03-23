import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService){}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = await this.prisma.department.create({
      data: {
          name: createDepartmentDto.name,
          nameuz: createDepartmentDto.nameuz,
          nameru: createDepartmentDto.nameru,
          listOrgId: createDepartmentDto.listOrgId
      }
    })

    return department
  }

  findAll() {
    return `This action returns all department`;
  }

  findOne(id: string) {
    return `This action returns a #${id} department`;
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: string) {
    return `This action removes a #${id} department`;
  }
}
