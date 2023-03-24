import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SortGravityService } from './sort-gravity.service';
import { CreateSortGravityDto } from './dto/create-sort-gravity.dto';
import { UpdateSortGravityDto } from './dto/update-sort-gravity.dto';

@Controller('sort-gravity')
export class SortGravityController {
  constructor(private readonly sortGravityService: SortGravityService) {}
 
  @Public()
  @Post("/create")
  create(@Body() createSortGravityDto: CreateSortGravityDto) {
    return this.sortGravityService.create(createSortGravityDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.sortGravityService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sortGravityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSortGravityDto: UpdateSortGravityDto) {
    return this.sortGravityService.update(id, updateSortGravityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sortGravityService.remove(id);
  }
}
