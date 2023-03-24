import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ListOrgService } from './list-org.service';
import { CreateListOrgDto } from './dto/create-list-org.dto';
import { UpdateListOrgDto } from './dto/update-list-org.dto';

@Controller('list-org')
export class ListOrgController {
  constructor(private readonly listOrgService: ListOrgService) {}

  @UseGuards(AtGuard)
  @Post()
  create(@Body() createListOrgDto: CreateListOrgDto) {
    return this.listOrgService.create(createListOrgDto);
  }

  @Get()
  findAll() {
    return this.listOrgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listOrgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListOrgDto: UpdateListOrgDto) {
    return this.listOrgService.update(id, updateListOrgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listOrgService.remove(id);
  }
}
