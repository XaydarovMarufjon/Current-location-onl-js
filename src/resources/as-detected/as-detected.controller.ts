import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AsDetectedService } from './as-detected.service';
import { CreateAsDetectedDto } from './dto/create-as-detected.dto';
import { UpdateAsDetectedDto } from './dto/update-as-detected.dto';

@Controller('as-detected')
export class AsDetectedController {
  constructor(private readonly asDetectedService: AsDetectedService) {}

  @Public()
  @Post("/create")
  create(@Body() createAsDetectedDto: CreateAsDetectedDto) {
    return this.asDetectedService.create(createAsDetectedDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.asDetectedService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asDetectedService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsDetectedDto: UpdateAsDetectedDto) {
    return this.asDetectedService.update(id, updateAsDetectedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asDetectedService.remove(id);
  }
}
