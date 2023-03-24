import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ImplementUgService } from './implement-ug.service';
import { CreateImplementUgDto } from './dto/create-implement-ug.dto';
import { UpdateImplementUgDto } from './dto/update-implement-ug.dto';

@Controller('implement-ug')
export class ImplementUgController {
  constructor(private readonly implementUgService: ImplementUgService) {}

  @Public()
  @Post("/create")
  create(@Body() createImplementUgDto: CreateImplementUgDto) {
    return this.implementUgService.create(createImplementUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.implementUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.implementUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImplementUgDto: UpdateImplementUgDto) {
    return this.implementUgService.update(id, updateImplementUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.implementUgService.remove(id);
  }
}
