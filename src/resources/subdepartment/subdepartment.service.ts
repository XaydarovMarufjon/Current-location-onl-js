import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubdepartmentDto } from './dto/create-subdepartment.dto';
import { UpdateSubdepartmentDto } from './dto/update-subdepartment.dto';

@Injectable()
export class SubdepartmentService {
  constructor(private prisma: PrismaService) {}
  async create(createSubdepartmentDto: CreateSubdepartmentDto) {
    const subDepartment = await this.prisma.subDepartment.create({
      data: {
          name: createSubdepartmentDto.name,
          nameuz: createSubdepartmentDto.nameuz,
          nameru: createSubdepartmentDto.nameru,
          departmentId: createSubdepartmentDto.departmentId
      }
    })

    return subDepartment
  }

  findAll() {
    return `This action returns all subdepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subdepartment`;
  }

  update(id: number, updateSubdepartmentDto: UpdateSubdepartmentDto) {
    return `This action updates a #${id} subdepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} subdepartment`;
  }
}
