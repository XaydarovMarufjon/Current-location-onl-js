import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ImpactObjectService } from './impact-object.service';
import { CreateImpactObjectDto } from './dto/create-impact-object.dto';
import { UpdateImpactObjectDto } from './dto/update-impact-object.dto';

@Controller('impact-object')
export class ImpactObjectController {
  constructor(private readonly impactObjectService: ImpactObjectService) {}

  @Public()
  @Post("/create")
  create(@Body() createImpactObjectDto: CreateImpactObjectDto) {
    return this.impactObjectService.create(createImpactObjectDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.impactObjectService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.impactObjectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImpactObjectDto: UpdateImpactObjectDto) {
    return this.impactObjectService.update(id, updateImpactObjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.impactObjectService.remove(id);
  }
}
