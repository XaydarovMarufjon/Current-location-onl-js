import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { AtGuard } from 'src/common/guards';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @UseGuards(AtGuard)
  @Post('/')
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto) {
    return this.positionService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionService.remove(+id);
  }
}
