import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GeographicalRegionService } from './geographical-region.service';
import { CreateGeographicalRegionDto } from './dto/create-geographical-region.dto';
import { UpdateGeographicalRegionDto } from './dto/update-geographical-region.dto';

@Controller('geographical-region')
export class GeographicalRegionController {
  constructor(private readonly geographicalRegionService: GeographicalRegionService) {}

  @Public()
  @Post("/create")
  create(@Body() createGeographicalRegionDto: CreateGeographicalRegionDto) {
    return this.geographicalRegionService.create(createGeographicalRegionDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.geographicalRegionService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geographicalRegionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeographicalRegionDto: UpdateGeographicalRegionDto) {
    return this.geographicalRegionService.update(id, updateGeographicalRegionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geographicalRegionService.remove(id);
  }
}
