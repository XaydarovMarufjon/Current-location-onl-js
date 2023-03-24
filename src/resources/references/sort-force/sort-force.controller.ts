import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SortForceService } from './sort-force.service';
import { CreateSortForceDto } from './dto/create-sort-force.dto';
import { UpdateSortForceDto } from './dto/update-sort-force.dto';
import { Public } from 'src/common/decorators';

@Controller('sort-force')
export class SortForceController {
  constructor(private readonly sortForceService: SortForceService) {}

  @Public()
  @Post("/create")
  create(@Body() createSortForceDto: CreateSortForceDto) {
    return this.sortForceService.create(createSortForceDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.sortForceService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sortForceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSortForceDto: UpdateSortForceDto) {
    return this.sortForceService.update(id, updateSortForceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sortForceService.remove(id);
  }
}
