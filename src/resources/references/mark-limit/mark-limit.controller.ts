import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MarkLimitService } from './mark-limit.service';
import { CreateMarkLimitDto } from './dto/create-mark-limit.dto';
import { UpdateMarkLimitDto } from './dto/update-mark-limit.dto';

@Controller('mark-limit')
export class MarkLimitController {
  constructor(private readonly markLimitService: MarkLimitService) {}

  @Public()
  @Post('/create')
  create(@Body() createMarkLimitDto: CreateMarkLimitDto) {
    return this.markLimitService.create(createMarkLimitDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.markLimitService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.markLimitService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarkLimitDto: UpdateMarkLimitDto) {
    return this.markLimitService.update(id, updateMarkLimitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.markLimitService.remove(id);
  }
}
