import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GroupComponentsService } from './group-components.service';
import { CreateGroupComponentDto } from './dto/create-group-component.dto';
import { UpdateGroupComponentDto } from './dto/update-group-component.dto';

@Controller('group-components')
export class GroupComponentsController {
  constructor(private readonly groupComponentsService: GroupComponentsService) {}

  @Public()
  @Post("/create")
  create(@Body() createGroupComponentDto: CreateGroupComponentDto) {
    return this.groupComponentsService.create(createGroupComponentDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.groupComponentsService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupComponentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupComponentDto: UpdateGroupComponentDto) {
    return this.groupComponentsService.update(id, updateGroupComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupComponentsService.remove(id);
  }
}
