import { AtGuard } from './../../common/guards/at.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServiceSueService } from './service-sue.service';
import { CreateServiceSueDto } from './dto/create-service-sue.dto';
import { UpdateServiceSueDto } from './dto/update-service-sue.dto';
import { Public } from 'src/common/decorators';

@Controller('service-sue')
export class ServiceSueController {
  constructor(private readonly serviceSueService: ServiceSueService) {}

  @Public()
  @Post("/create")
  create(@Body() createServiceSueDto: CreateServiceSueDto) {
    return this.serviceSueService.create(createServiceSueDto);
  }
 
  @Public()
  @Get("/getall")
  findAll() {
    return this.serviceSueService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceSueService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceSueDto: UpdateServiceSueDto) {
    return this.serviceSueService.update(id, updateServiceSueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceSueService.remove(id);
  }
}
