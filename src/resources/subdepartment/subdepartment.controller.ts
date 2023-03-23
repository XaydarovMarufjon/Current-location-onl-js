import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubdepartmentService } from './subdepartment.service';
import { CreateSubdepartmentDto } from './dto/create-subdepartment.dto';
import { UpdateSubdepartmentDto } from './dto/update-subdepartment.dto';
import { AtGuard } from 'src/common/guards';

@Controller('subdepartment')
export class SubdepartmentController {
  constructor(private readonly subdepartmentService: SubdepartmentService) {}

  @UseGuards(AtGuard)
  @Post()
  create(@Body() createSubdepartmentDto: CreateSubdepartmentDto) {
    return this.subdepartmentService.create(createSubdepartmentDto);
  }

  @Get()
  findAll() {
    return this.subdepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subdepartmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubdepartmentDto: UpdateSubdepartmentDto) {
    return this.subdepartmentService.update(id, updateSubdepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subdepartmentService.remove(id);
  }
}
