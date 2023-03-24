import { Public } from 'src/common/decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VulnerabilitiesService } from './vulnerabilities.service';
import { CreateVulnerabilityDto } from './dto/create-vulnerability.dto';
import { UpdateVulnerabilityDto } from './dto/update-vulnerability.dto';

@Controller('vulnerabilities')
export class VulnerabilitiesController {
  constructor(private readonly vulnerabilitiesService: VulnerabilitiesService) {}

  @Public()
  @Post("/create")
  create(@Body() createVulnerabilityDto: CreateVulnerabilityDto) {
    return this.vulnerabilitiesService.create(createVulnerabilityDto);
  }

  @Get()
  findAll() {
    return this.vulnerabilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vulnerabilitiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVulnerabilityDto: UpdateVulnerabilityDto) {
    return this.vulnerabilitiesService.update(id, updateVulnerabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vulnerabilitiesService.remove(id);
  }
}
