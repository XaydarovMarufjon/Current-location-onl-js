import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HarmfulDomainService } from './harmful-domain.service';
import { CreateHarmfulDomainDto } from './dto/create-harmful-domain.dto';
import { UpdateHarmfulDomainDto } from './dto/update-harmful-domain.dto';

@Controller('harmful-domain')
export class HarmfulDomainController {
  constructor(private readonly harmfulDomainService: HarmfulDomainService) {}

  @Post()
  create(@Body() createHarmfulDomainDto: CreateHarmfulDomainDto) {
    return this.harmfulDomainService.create(createHarmfulDomainDto);
  }

  @Get()
  findAll() {
    return this.harmfulDomainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.harmfulDomainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHarmfulDomainDto: UpdateHarmfulDomainDto) {
    return this.harmfulDomainService.update(+id, updateHarmfulDomainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.harmfulDomainService.remove(+id);
  }
}
