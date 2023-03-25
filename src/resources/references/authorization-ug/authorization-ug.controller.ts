import { AtGuard } from './../../../common/guards/at.guard';
import { Public } from './../../../common/decorators/public.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthorizationUgService } from './authorization-ug.service';
import { CreateAuthorizationUgDto } from './dto/create-authorization-ug.dto';
import { UpdateAuthorizationUgDto } from './dto/update-authorization-ug.dto';

@Controller('authorization-ug')
export class AuthorizationUgController {
  constructor(private readonly authorizationUgService: AuthorizationUgService) {}

  @Public()
  @Post("/create")
  create(@Body() createAuthorizationUgDto: CreateAuthorizationUgDto) {
    return this.authorizationUgService.create(createAuthorizationUgDto);
  }

  @Public()
  @Get("/getall")
  findAll() {
    return this.authorizationUgService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizationUgService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorizationUgDto: UpdateAuthorizationUgDto) {
    return this.authorizationUgService.update(id, updateAuthorizationUgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizationUgService.remove(id);
  }
}
