import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PresenceUgService } from './presence-ug.service';
import { CreatePresenceUgDto } from './dto/create-presence-ug.dto';
import { UpdatePresenceUgDto } from './dto/update-presence-ug.dto';

@Controller('presence-ug')
export class PresenceUgController {
  constructor(private readonly presenceUgService: PresenceUgService) {}

  @Public()
  @Post("/create")
  create(@Body() createPresenceUgDto: CreatePresenceUgDto) {
    return this.presenceUgService.create(createPresenceUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.presenceUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presenceUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresenceUgDto: UpdatePresenceUgDto) {
    return this.presenceUgService.update(id, updatePresenceUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presenceUgService.remove(id);
  }
}
