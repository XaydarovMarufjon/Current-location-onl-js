import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HarmfulDomainUriService } from './harmful-domain-uri.service';
import { CreateHarmfulDomainUriDto } from './dto/create-harmful-domain-uri.dto';
import { UpdateHarmfulDomainUriDto } from './dto/update-harmful-domain-uri.dto';

@Controller('harmful-domain-uri')
export class HarmfulDomainUriController {
  constructor(private readonly harmfulDomainUriService: HarmfulDomainUriService) {}

  @Public()
  @Post("/create")
  create(@Body() createHarmfulDomainUriDto: CreateHarmfulDomainUriDto) {
    return this.harmfulDomainUriService.create(createHarmfulDomainUriDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.harmfulDomainUriService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.harmfulDomainUriService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHarmfulDomainUriDto: UpdateHarmfulDomainUriDto) {
    return this.harmfulDomainUriService.update(id, updateHarmfulDomainUriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.harmfulDomainUriService.remove(id);
  }
}
