import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IdentificationUgService } from './identification-ug.service';
import { CreateIdentificationUgDto } from './dto/create-identification-ug.dto';
import { UpdateIdentificationUgDto } from './dto/update-identification-ug.dto';

@Controller('identification-ug')
export class IdentificationUgController {
  constructor(private readonly identificationUgService: IdentificationUgService) {}

  
  @Public()
  @Post("/create")
  create(@Body() createIdentificationUgDto: CreateIdentificationUgDto) {
    return this.identificationUgService.create(createIdentificationUgDto);
  }
  
  @Public()
  @Get("/getall")
  findAll() {
    return this.identificationUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.identificationUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdentificationUgDto: UpdateIdentificationUgDto) {
    return this.identificationUgService.update(id, updateIdentificationUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.identificationUgService.remove(id);
  }
}
