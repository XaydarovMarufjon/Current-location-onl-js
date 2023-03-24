import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImpactUgService } from './impact-ug.service';
import { CreateImpactUgDto } from './dto/create-impact-ug.dto';
import { UpdateImpactUgDto } from './dto/update-impact-ug.dto';

@Controller('impact-ug')
export class ImpactUgController {
  constructor(private readonly impactUgService: ImpactUgService) {}

  @Post()
  create(@Body() createImpactUgDto: CreateImpactUgDto) {
    return this.impactUgService.create(createImpactUgDto);
  }

  @Get()
  findAll() {
    return this.impactUgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.impactUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImpactUgDto: UpdateImpactUgDto) {
    return this.impactUgService.update(id, updateImpactUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.impactUgService.remove(id);
  }
}
