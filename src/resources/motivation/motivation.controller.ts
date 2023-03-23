import { Public } from 'src/common/decorators';
import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MotivationService } from './motivation.service';
import { CreateMotivationDto } from './dto/create-motivation.dto';
import { UpdateMotivationDto } from './dto/update-motivation.dto';

@Controller('motivation')
export class MotivationController {
  constructor(private readonly motivationService: MotivationService) {}

  @Public()
  @Post("/create")
  create(@Body() createMotivationDto: CreateMotivationDto) {
    return this.motivationService.create(createMotivationDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.motivationService.findAll();
  }

  
  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motivationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotivationDto: UpdateMotivationDto) {
    return this.motivationService.update(id, updateMotivationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motivationService.remove(id);
  }
}
