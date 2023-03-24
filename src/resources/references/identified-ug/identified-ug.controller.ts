import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IdentifiedUgService } from './identified-ug.service';
import { CreateIdentifiedUgDto } from './dto/create-identified-ug.dto';
import { UpdateIdentifiedUgDto } from './dto/update-identified-ug.dto';

@Controller('identified-ug')
export class IdentifiedUgController {
  constructor(private readonly identifiedUgService: IdentifiedUgService) {}

  
  @Public()
  @Post("/create")
  create(@Body() createIdentifiedUgDto: CreateIdentifiedUgDto) {
    return this.identifiedUgService.create(createIdentifiedUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.identifiedUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.identifiedUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdentifiedUgDto: UpdateIdentifiedUgDto) {
    return this.identifiedUgService.update(id, updateIdentifiedUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.identifiedUgService.remove(id);
  }
}
