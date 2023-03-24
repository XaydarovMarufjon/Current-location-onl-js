import { AtGuard } from './../../../common/guards/at.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HarmfulDomainEmailService } from './harmful-domain-email.service';
import { CreateHarmfulDomainEmailDto } from './dto/create-harmful-domain-email.dto';
import { UpdateHarmfulDomainEmailDto } from './dto/update-harmful-domain-email.dto';
import { Public } from 'src/common/decorators';

@Controller('harmful-domain-email')
export class HarmfulDomainEmailController {
  constructor(private readonly harmfulDomainEmailService: HarmfulDomainEmailService) {}

  @Public()
  @Post("/create")
  create(@Body() createHarmfulDomainEmailDto: CreateHarmfulDomainEmailDto) {
    return this.harmfulDomainEmailService.create(createHarmfulDomainEmailDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.harmfulDomainEmailService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.harmfulDomainEmailService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHarmfulDomainEmailDto: UpdateHarmfulDomainEmailDto) {
    return this.harmfulDomainEmailService.update(id, updateHarmfulDomainEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.harmfulDomainEmailService.remove(id);
  }
}
