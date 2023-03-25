import { AtGuard } from 'src/common/guards';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EvaluationUgService } from './evaluation-ug.service';
import { CreateEvaluationUgDto } from './dto/create-evaluation-ug.dto';
import { UpdateEvaluationUgDto } from './dto/update-evaluation-ug.dto';
import { Public } from 'src/common/decorators';

@Controller('evaluation-ug')
export class EvaluationUgController {
  constructor(private readonly evaluationUgService: EvaluationUgService) {}
  @Public()
  @Post("/create")
  create(@Body() createEvaluationUgDto: CreateEvaluationUgDto) {
    return this.evaluationUgService.create(createEvaluationUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.evaluationUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationUgDto: UpdateEvaluationUgDto) {
    return this.evaluationUgService.update(id, updateEvaluationUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationUgService.remove(id);
  }
}
