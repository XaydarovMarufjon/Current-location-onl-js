import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeverityLevelService } from './severity-level.service';
import { CreateSeverityLevelDto } from './dto/create-severity-level.dto';
import { UpdateSeverityLevelDto } from './dto/update-severity-level.dto';

@Controller('severity-level')
export class SeverityLevelController {
  constructor(private readonly severityLevelService: SeverityLevelService) {}
 
  @Public()
  @Post("/create")
  create(@Body() createSeverityLevelDto: CreateSeverityLevelDto) {
    return this.severityLevelService.create(createSeverityLevelDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.severityLevelService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.severityLevelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeverityLevelDto: UpdateSeverityLevelDto) {
    return this.severityLevelService.update(id, updateSeverityLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.severityLevelService.remove(id);
  }
}
