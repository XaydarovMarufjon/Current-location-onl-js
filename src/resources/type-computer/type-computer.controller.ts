import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TypeComputerService } from './type-computer.service';
import { CreateTypeComputerDto } from './dto/create-type-computer.dto';
import { UpdateTypeComputerDto } from './dto/update-type-computer.dto';

@Controller('type-computer')
export class TypeComputerController {
  constructor(private readonly typeComputerService: TypeComputerService) {}

  @Public()
  @Post("/create")
  create(@Body() createTypeComputerDto: CreateTypeComputerDto) {
    return this.typeComputerService.create(createTypeComputerDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.typeComputerService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeComputerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeComputerDto: UpdateTypeComputerDto) {
    return this.typeComputerService.update(id, updateTypeComputerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeComputerService.remove(id);
  }
}
