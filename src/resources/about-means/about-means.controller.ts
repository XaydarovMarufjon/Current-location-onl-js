import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutMeansService } from './about-means.service';
import { CreateAboutMeanDto } from './dto/create-about-mean.dto';
import { UpdateAboutMeanDto } from './dto/update-about-mean.dto';

@Controller('about-means')
export class AboutMeansController {
  constructor(private readonly aboutMeansService: AboutMeansService) {}

  @Post()
  create(@Body() createAboutMeanDto: CreateAboutMeanDto) {
    return this.aboutMeansService.create(createAboutMeanDto);
  }

  @Get()
  findAll() {
    return this.aboutMeansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutMeansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutMeanDto: UpdateAboutMeanDto) {
    return this.aboutMeansService.update(+id, updateAboutMeanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutMeansService.remove(+id);
  }
}
