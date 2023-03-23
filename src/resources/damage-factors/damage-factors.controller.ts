import { Public } from 'src/common/decorators';
import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DamageFactorsService } from './damage-factors.service';
import { CreateDamageFactorDto } from './dto/create-damage-factor.dto';
import { UpdateDamageFactorDto } from './dto/update-damage-factor.dto';

@Controller('damage-factors')
export class DamageFactorsController {
  constructor(private readonly damageFactorsService: DamageFactorsService) {}

  @Public()
  @Post("/create")
  create(@Body() createDamageFactorDto: CreateDamageFactorDto) {
    return this.damageFactorsService.create(createDamageFactorDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.damageFactorsService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.damageFactorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDamageFactorDto: UpdateDamageFactorDto) {
    return this.damageFactorsService.update(id, updateDamageFactorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.damageFactorsService.remove(id);
  }
}
