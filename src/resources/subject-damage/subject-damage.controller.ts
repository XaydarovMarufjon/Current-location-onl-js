import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubjectDamageService } from './subject-damage.service';
import { CreateSubjectDamageDto } from './dto/create-subject-damage.dto';
import { UpdateSubjectDamageDto } from './dto/update-subject-damage.dto';

@Controller('subject-damage')
export class SubjectDamageController {
  constructor(private readonly subjectDamageService: SubjectDamageService) {}

  @Public()
  @Post("/create")
  create(@Body() createSubjectDamageDto: CreateSubjectDamageDto) {
    return this.subjectDamageService.create(createSubjectDamageDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.subjectDamageService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectDamageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDamageDto: UpdateSubjectDamageDto) {
    return this.subjectDamageService.update(id, updateSubjectDamageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectDamageService.remove(id);
  }
}
