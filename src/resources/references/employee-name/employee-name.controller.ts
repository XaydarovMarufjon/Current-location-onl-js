import { Public } from 'src/common/decorators';
import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeeNameService } from './employee-name.service';
import { CreateEmployeeNameDto } from './dto/create-employee-name.dto';
import { UpdateEmployeeNameDto } from './dto/update-employee-name.dto';

@Controller('employee-name')
export class EmployeeNameController {
  constructor(private readonly employeeNameService: EmployeeNameService) {}

  @Public()
  @Post("/create")
  create(@Body() createEmployeeNameDto: CreateEmployeeNameDto) {
    return this.employeeNameService.create(createEmployeeNameDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.employeeNameService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeNameService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeNameDto: UpdateEmployeeNameDto) {
    return this.employeeNameService.update(id, updateEmployeeNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeNameService.remove(id);
  }
}
