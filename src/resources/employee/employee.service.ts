import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService){}
  async create(createEmployeeInput: CreateEmployeeInput) {
    const newEmployee = await this.prisma.employee.create({
      data: {
          fullName: createEmployeeInput.fullName,
          organization: createEmployeeInput.organization,
          department: createEmployeeInput.department,
          position: createEmployeeInput.position,
          email: createEmployeeInput.email,
          phone: createEmployeeInput.phone,
          role: createEmployeeInput.role,
          photo: createEmployeeInput.photo,
          userId: 1 //createEmployeeInput.userId
      }
  });
    return "newEmployee";
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
