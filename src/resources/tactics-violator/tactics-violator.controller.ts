import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TacticsViolatorService } from './tactics-violator.service';
import { CreateTacticsViolatorDto } from './dto/create-tactics-violator.dto';
import { UpdateTacticsViolatorDto } from './dto/update-tactics-violator.dto';

@Controller('tactics-violator')
export class TacticsViolatorController {
  constructor(private readonly tacticsViolatorService: TacticsViolatorService) {}

  @Public()
  @Post("/create")
  create(@Body() createTacticsViolatorDto: CreateTacticsViolatorDto) {
    return this.tacticsViolatorService.create(createTacticsViolatorDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.tacticsViolatorService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tacticsViolatorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTacticsViolatorDto: UpdateTacticsViolatorDto) {
    return this.tacticsViolatorService.update(id, updateTacticsViolatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tacticsViolatorService.remove(id);
  }
}
