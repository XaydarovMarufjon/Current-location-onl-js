import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AboutMeansService } from './about-means.service';
import { CreateAboutMeanDto } from './dto/create-about-mean.dto';
import { UpdateAboutMeanDto } from './dto/update-about-mean.dto';

@Controller('about-means')
export class AboutMeansController {
  constructor(private readonly aboutMeansService: AboutMeansService) {}

  @Post("/create")
  create(@Body() createAboutMeanDto: CreateAboutMeanDto) {
    return this.aboutMeansService.create(createAboutMeanDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.aboutMeansService.findAll();
  }
  
  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutMeansService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutMeanDto: UpdateAboutMeanDto) {
    return this.aboutMeansService.update(id, updateAboutMeanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutMeansService.remove(id);
  }
}
