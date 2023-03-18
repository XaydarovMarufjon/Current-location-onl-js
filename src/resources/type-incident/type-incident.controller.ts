import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TypeIncidentService } from './type-incident.service';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';

@Controller('type-incident')
export class TypeIncidentController {
  constructor(private readonly typeIncidentService: TypeIncidentService) {}
  
  @Public()
  @Post("/create")
  create(@Body() createTypeIncidentDto: CreateTypeIncidentDto) {
    return this.typeIncidentService.create(createTypeIncidentDto);
  }
  
  @Public()
  @Get("/getall")
  findAll() {
    return this.typeIncidentService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeIncidentService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeIncidentDto: UpdateTypeIncidentDto) {
    return this.typeIncidentService.update(id, updateTypeIncidentDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeIncidentService.remove(id);
  }
}
