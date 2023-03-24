import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { AttackedDomainService } from './attacked-domain.service';
import { CreateAttackedDomainDto } from './dto/create-attacked-domain.dto';
import { UpdateAttackedDomainDto } from './dto/update-attacked-domain.dto';

@Controller('attacked-domain')
export class AttackedDomainController {
  constructor(private readonly attackedDomainService: AttackedDomainService) {}

  @Public()
  @Post("/create")
  create(@Body() createAttackedDomainDto: CreateAttackedDomainDto) {
    return this.attackedDomainService.create(createAttackedDomainDto);
  }

  @Public()
  @Post("/getall")
  @Get()
  findAll() {
    return this.attackedDomainService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attackedDomainService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttackedDomainDto: UpdateAttackedDomainDto) {
    return this.attackedDomainService.update(id, updateAttackedDomainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attackedDomainService.remove(id);
  }
}
