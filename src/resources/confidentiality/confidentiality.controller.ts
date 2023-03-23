import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConfidentialityService } from './confidentiality.service';
import { CreateConfidentialityDto } from './dto/create-confidentiality.dto';
import { UpdateConfidentialityDto } from './dto/update-confidentiality.dto';

@Controller('confidentiality')
export class ConfidentialityController {
  constructor(private readonly confidentialityService: ConfidentialityService) {}

  @Public()
  @Post("/create")
  create(@Body() createConfidentialityDto: CreateConfidentialityDto) {
    return this.confidentialityService.create(createConfidentialityDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.confidentialityService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confidentialityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfidentialityDto: UpdateConfidentialityDto) {
    return this.confidentialityService.update(id, updateConfidentialityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confidentialityService.remove(id);
  }
}
