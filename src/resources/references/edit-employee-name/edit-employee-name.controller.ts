import { AtGuard } from './../../common/guards/at.guard';
import { Public } from './../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EditEmployeeNameService } from './edit-employee-name.service';
import { CreateEditEmployeeNameDto } from './dto/create-edit-employee-name.dto';
import { UpdateEditEmployeeNameDto } from './dto/update-edit-employee-name.dto';

@Controller('edit-employee-name')
export class EditEmployeeNameController {
  constructor(private readonly editEmployeeNameService: EditEmployeeNameService) {}

  @Public()
  @Post("/create")
  create(@Body() createEditEmployeeNameDto: CreateEditEmployeeNameDto) {
    return this.editEmployeeNameService.create(createEditEmployeeNameDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.editEmployeeNameService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editEmployeeNameService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEditEmployeeNameDto: UpdateEditEmployeeNameDto) {
    return this.editEmployeeNameService.update(id, updateEditEmployeeNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editEmployeeNameService.remove(id);
  }
}
