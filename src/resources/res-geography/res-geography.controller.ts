import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ResGeographyService } from './res-geography.service';
import { CreateResGeographyDto } from './dto/create-res-geography.dto';
import { UpdateResGeographyDto } from './dto/update-res-geography.dto';

@Controller('res-geography')
export class ResGeographyController {
  constructor(private readonly resGeographyService: ResGeographyService) {}

  @Public()
  @Post("/create")
  create(@Body() createResGeographyDto: CreateResGeographyDto) {
    return this.resGeographyService.create(createResGeographyDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.resGeographyService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resGeographyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResGeographyDto: UpdateResGeographyDto) {
    return this.resGeographyService.update(id, updateResGeographyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resGeographyService.remove(id);
  }
}
