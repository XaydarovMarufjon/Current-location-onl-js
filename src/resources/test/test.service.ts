import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService) {}
  async create(createTestDto: CreateTestDto) {

    const result = await this.prisma.$transaction(async prisma => {
      const password = await this.hashData(createTestDto.password);
      const userData = {
        username: createTestDto.username,
        password
      } as const;

      const user = await prisma.user.create({
        data: userData
      });

      const employee = await prisma.employee.create({
        data: {
            fullName: createTestDto.fullName,
            organization: createTestDto.organization,
            department: createTestDto.department,
            position: createTestDto.position,
            email: createTestDto.email,
            phone: createTestDto.phone,
            role: createTestDto.role,
            photo: createTestDto.photo,
            userId: user.id 
        }
      })
      return employee
    })

  //   const newEmployee = await this.prisma.employee.create({
  //     data: {
  //         fullName: createTestDto.fullName,
  //         organization: createTestDto.organization,
  //         department: createTestDto.department,
  //         position: createTestDto.position,
  //         email: createTestDto.email,
  //         phone: createTestDto.phone,
  //         role: createTestDto.role,
  //         photo: createTestDto.photo,
  //         userId: 1 
  //     }
  // });
    return result;
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }

  hashData(data: string) {
      return bcrypt.hash(data,10)
  }
}
