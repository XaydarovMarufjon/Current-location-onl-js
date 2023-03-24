import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DetectedStatusService } from './detected-status.service';
import { CreateDetectedStatusDto } from './dto/create-detected-status.dto';
import { UpdateDetectedStatusDto } from './dto/update-detected-status.dto';

@Controller('detected-status')
export class DetectedStatusController {
  constructor(private readonly detectedStatusService: DetectedStatusService) {}

  @Public()
  @Post("/create")
  create(@Body() createDetectedStatusDto: CreateDetectedStatusDto) {
    return this.detectedStatusService.create(createDetectedStatusDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.detectedStatusService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detectedStatusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetectedStatusDto: UpdateDetectedStatusDto) {
    return this.detectedStatusService.update(id, updateDetectedStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detectedStatusService.remove(id);
  }
}
