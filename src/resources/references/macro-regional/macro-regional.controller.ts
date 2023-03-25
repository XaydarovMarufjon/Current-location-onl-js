import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MacroRegionalService } from './macro-regional.service';
import { CreateMacroRegionalDto } from './dto/create-macro-regional.dto';
import { UpdateMacroRegionalDto } from './dto/update-macro-regional.dto';

@Controller('macro-regional')
export class MacroRegionalController {
  constructor(private readonly macroRegionalService: MacroRegionalService) {}

  @Public()
  @Post("/create")
  create(@Body() createMacroRegionalDto: CreateMacroRegionalDto) {
    return this.macroRegionalService.create(createMacroRegionalDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.macroRegionalService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.macroRegionalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMacroRegionalDto: UpdateMacroRegionalDto) {
    return this.macroRegionalService.update(id, updateMacroRegionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.macroRegionalService.remove(id);
  }
}
