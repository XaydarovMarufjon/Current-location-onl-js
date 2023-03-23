import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CurrentStatusService } from './current-status.service';
import { CreateCurrentStatusDto } from './dto/create-current-status.dto';
import { UpdateCurrentStatusDto } from './dto/update-current-status.dto';

@Controller('current-status')
export class CurrentStatusController {
  constructor(private readonly currentStatusService: CurrentStatusService) {}

  @Public()
  @Post("/create")
  create(@Body() createCurrentStatusDto: CreateCurrentStatusDto) {
    return this.currentStatusService.create(createCurrentStatusDto);
  }
  @Public()
  @Get("/getall")
  findAll() {
    return this.currentStatusService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currentStatusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrentStatusDto: UpdateCurrentStatusDto) {
    return this.currentStatusService.update(id, updateCurrentStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currentStatusService.remove(id);
  }
}
