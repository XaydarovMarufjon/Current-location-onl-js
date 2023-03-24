import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ImpactComponentService } from './impact-component.service';
import { CreateImpactComponentDto } from './dto/create-impact-component.dto';
import { UpdateImpactComponentDto } from './dto/update-impact-component.dto';

@Controller('impact-component')
export class ImpactComponentController {
  constructor(private readonly impactComponentService: ImpactComponentService) {}

  @Public()
  @Post("/create")
  create(@Body() createImpactComponentDto: CreateImpactComponentDto) {
    return this.impactComponentService.create(createImpactComponentDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.impactComponentService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.impactComponentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImpactComponentDto: UpdateImpactComponentDto) {
    return this.impactComponentService.update(id, updateImpactComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.impactComponentService.remove(id);
  }
}
