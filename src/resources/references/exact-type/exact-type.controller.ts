import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExactTypeService } from './exact-type.service';
import { CreateExactTypeDto } from './dto/create-exact-type.dto';
import { UpdateExactTypeDto } from './dto/update-exact-type.dto';

@Controller('exact-type')
export class ExactTypeController {
  constructor(private readonly exactTypeService: ExactTypeService) {}

  @Public()
  @Post("/create")
  create(@Body() createExactTypeDto: CreateExactTypeDto) {
    return this.exactTypeService.create(createExactTypeDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.exactTypeService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exactTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExactTypeDto: UpdateExactTypeDto) {
    return this.exactTypeService.update(id, updateExactTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exactTypeService.remove(id);
  }
}
