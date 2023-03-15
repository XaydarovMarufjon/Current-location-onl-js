import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeIncidentService } from './type-incident.service';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';

@Controller('type-incident')
export class TypeIncidentController {
  constructor(private readonly typeIncidentService: TypeIncidentService) {}

  @Post()
  create(@Body() createTypeIncidentDto: CreateTypeIncidentDto) {
    return this.typeIncidentService.create(createTypeIncidentDto);
  }

  @Get()
  findAll() {
    return this.typeIncidentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeIncidentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeIncidentDto: UpdateTypeIncidentDto) {
    return this.typeIncidentService.update(+id, updateTypeIncidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeIncidentService.remove(+id);
  }
}
