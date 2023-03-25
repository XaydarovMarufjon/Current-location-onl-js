import { AtGuard } from './../../../common/guards/at.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ImpactUgService } from './impact-ug.service';
import { CreateImpactUgDto } from './dto/create-impact-ug.dto';
import { UpdateImpactUgDto } from './dto/update-impact-ug.dto';
import { Public } from 'src/common/decorators';

@Controller('impact-ug')
export class ImpactUgController {
  constructor(private readonly impactUgService: ImpactUgService) {}

  @Public()
  @Post("/create")
  create(@Body() createImpactUgDto: CreateImpactUgDto) {
    return this.impactUgService.create(createImpactUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.impactUgService.findAll();
  }

  @UseGuards(AtGuard)
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
