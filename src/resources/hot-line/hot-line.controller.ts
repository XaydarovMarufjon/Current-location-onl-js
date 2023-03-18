import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotLineService } from './hot-line.service';
import { CreateHotLineDto } from './dto/create-hot-line.dto';
import { UpdateHotLineDto } from './dto/update-hot-line.dto';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('hot-line')
export class HotLineController {
  constructor(private readonly hotLineService: HotLineService) {}

  @Public()
  @Post("/create")
  create(@Body() createHotLineDto: CreateHotLineDto) {
    return this.hotLineService.create(createHotLineDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.hotLineService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotLineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotLineDto: UpdateHotLineDto) {
    return this.hotLineService.update(id, updateHotLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotLineService.remove(id);
  }
}
