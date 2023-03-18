import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HarmfulDomainEmailService } from './harmful-domain-email.service';
import { CreateHarmfulDomainEmailDto } from './dto/create-harmful-domain-email.dto';
import { UpdateHarmfulDomainEmailDto } from './dto/update-harmful-domain-email.dto';

@Controller('harmful-domain-email')
export class HarmfulDomainEmailController {
  constructor(private readonly harmfulDomainEmailService: HarmfulDomainEmailService) {}

  @Post()
  create(@Body() createHarmfulDomainEmailDto: CreateHarmfulDomainEmailDto) {
    return this.harmfulDomainEmailService.create(createHarmfulDomainEmailDto);
  }

  @Get()
  findAll() {
    return this.harmfulDomainEmailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.harmfulDomainEmailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHarmfulDomainEmailDto: UpdateHarmfulDomainEmailDto) {
    return this.harmfulDomainEmailService.update(+id, updateHarmfulDomainEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.harmfulDomainEmailService.remove(+id);
  }
}
