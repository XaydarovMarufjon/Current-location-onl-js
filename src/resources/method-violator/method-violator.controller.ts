import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MethodViolatorService } from './method-violator.service';
import { CreateMethodViolatorDto } from './dto/create-method-violator.dto';
import { UpdateMethodViolatorDto } from './dto/update-method-violator.dto';

@Controller('method-violator')
export class MethodViolatorController {
  constructor(private readonly methodViolatorService: MethodViolatorService) {}

  @Public()
  @Post("/create")
  create(@Body() createMethodViolatorDto: CreateMethodViolatorDto) {
    return this.methodViolatorService.create(createMethodViolatorDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.methodViolatorService.findAll();
  }
  
  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.methodViolatorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMethodViolatorDto: UpdateMethodViolatorDto) {
    return this.methodViolatorService.update(id, updateMethodViolatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.methodViolatorService.remove(id);
  }
}
