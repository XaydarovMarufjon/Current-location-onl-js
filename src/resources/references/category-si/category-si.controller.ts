import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorySiService } from './category-si.service';
import { CreateCategorySiDto } from './dto/create-category-si.dto';
import { UpdateCategorySiDto } from './dto/update-category-si.dto';

@Controller('category-si')
export class CategorySiController {
  constructor(private readonly categorySiService: CategorySiService) {}

  @Post()
  create(@Body() createCategorySiDto: CreateCategorySiDto) {
    return this.categorySiService.create(createCategorySiDto);
  }

  @Get()
  findAll() {
    return this.categorySiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorySiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategorySiDto: UpdateCategorySiDto) {
    return this.categorySiService.update(+id, updateCategorySiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorySiService.remove(+id);
  }
}
