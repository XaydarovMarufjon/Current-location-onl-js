import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeComponentsService } from './type-components.service';
import { CreateTypeComponentDto } from './dto/create-type-component.dto';
import { UpdateTypeComponentDto } from './dto/update-type-component.dto';

@Controller('type-components')
export class TypeComponentsController {
  constructor(private readonly typeComponentsService: TypeComponentsService) {}

  @Post()
  create(@Body() createTypeComponentDto: CreateTypeComponentDto) {
    return this.typeComponentsService.create(createTypeComponentDto);
  }

  @Get()
  findAll() {
    return this.typeComponentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeComponentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeComponentDto: UpdateTypeComponentDto) {
    return this.typeComponentsService.update(+id, updateTypeComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeComponentsService.remove(+id);
  }
}
