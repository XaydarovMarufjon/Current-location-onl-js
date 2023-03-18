import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AttackedDomainEmailService } from './attacked-domain-email.service';
import { CreateAttackedDomainEmailDto } from './dto/create-attacked-domain-email.dto';
import { UpdateAttackedDomainEmailDto } from './dto/update-attacked-domain-email.dto';

@Controller('attacked-domain-email')
export class AttackedDomainEmailController {
  constructor(private readonly attackedDomainEmailService: AttackedDomainEmailService) {}

  @Public()
  @Post("/create")
  create(@Body() createAttackedDomainEmailDto: CreateAttackedDomainEmailDto) {
    return this.attackedDomainEmailService.create(createAttackedDomainEmailDto);
  }

  
  @Public()
  @Get("/getall")
  findAll() {
    return this.attackedDomainEmailService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attackedDomainEmailService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttackedDomainEmailDto: UpdateAttackedDomainEmailDto) {
    return this.attackedDomainEmailService.update(id, updateAttackedDomainEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attackedDomainEmailService.remove(id);
  }
}
