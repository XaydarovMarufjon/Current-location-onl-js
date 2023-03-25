import { AtGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConsequencesUgService } from './consequences-ug.service';
import { CreateConsequencesUgDto } from './dto/create-consequences-ug.dto';
import { UpdateConsequencesUgDto } from './dto/update-consequences-ug.dto';

@Controller('consequences-ug')
export class ConsequencesUgController {
  constructor(private readonly consequencesUgService: ConsequencesUgService) {}

  @Public()
  @Post("/create")
  create(@Body() createConsequencesUgDto: CreateConsequencesUgDto) {
    return this.consequencesUgService.create(createConsequencesUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.consequencesUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consequencesUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsequencesUgDto: UpdateConsequencesUgDto) {
    return this.consequencesUgService.update(id, updateConsequencesUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consequencesUgService.remove(id);
  }
}
