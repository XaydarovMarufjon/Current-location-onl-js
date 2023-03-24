import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TypicalThreatService } from './typical-threat.service';
import { CreateTypicalThreatDto } from './dto/create-typical-threat.dto';
import { UpdateTypicalThreatDto } from './dto/update-typical-threat.dto';

@Controller('typical-threat')
export class TypicalThreatController {
  constructor(private readonly typicalThreatService: TypicalThreatService) {}

  @Public()
  @Post("/create")
  create(@Body() createTypicalThreatDto: CreateTypicalThreatDto) {
    return this.typicalThreatService.create(createTypicalThreatDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.typicalThreatService.findAll();
  }
  
  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typicalThreatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypicalThreatDto: UpdateTypicalThreatDto) {
    return this.typicalThreatService.update(id, updateTypicalThreatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typicalThreatService.remove(id);
  }
}
