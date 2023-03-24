import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AttackedDomainUriService } from './attacked-domain-uri.service';
import { CreateAttackedDomainUriDto } from './dto/create-attacked-domain-uri.dto';
import { UpdateAttackedDomainUriDto } from './dto/update-attacked-domain-uri.dto';

@Controller('attacked-domain-uri')
export class AttackedDomainUriController {
  constructor(private readonly attackedDomainUriService: AttackedDomainUriService) {}

  @Public()
  @Post("/create")
  create(@Body() createAttackedDomainUriDto: CreateAttackedDomainUriDto) {
    return this.attackedDomainUriService.create(createAttackedDomainUriDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.attackedDomainUriService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attackedDomainUriService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttackedDomainUriDto: UpdateAttackedDomainUriDto) {
    return this.attackedDomainUriService.update(id, updateAttackedDomainUriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attackedDomainUriService.remove(id);
  }
}
