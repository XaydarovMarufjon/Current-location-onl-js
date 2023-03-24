import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IdentifiedThreatService } from './identified-threat.service';
import { CreateIdentifiedThreatDto } from './dto/create-identified-threat.dto';
import { UpdateIdentifiedThreatDto } from './dto/update-identified-threat.dto';

@Controller('identified-threat')
export class IdentifiedThreatController {
  constructor(private readonly identifiedThreatService: IdentifiedThreatService) {}

  @Public()
  @Post("/create")
  create(@Body() createIdentifiedThreatDto: CreateIdentifiedThreatDto) {
    return this.identifiedThreatService.create(createIdentifiedThreatDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.identifiedThreatService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.identifiedThreatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdentifiedThreatDto: UpdateIdentifiedThreatDto) {
    return this.identifiedThreatService.update(id, updateIdentifiedThreatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.identifiedThreatService.remove(id);
  }
}
