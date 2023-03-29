import { Injectable } from '@nestjs/common';
import { CreateCategorySiDto } from './dto/create-category-si.dto';
import { UpdateCategorySiDto } from './dto/update-category-si.dto';

@Injectable()
export class CategorySiService {
  create(createCategorySiDto: CreateCategorySiDto) {
    return 'This action adds a new categorySi';
  }

  findAll() {
    return `This action returns all categorySi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categorySi`;
  }

  update(id: number, updateCategorySiDto: UpdateCategorySiDto) {
    return `This action updates a #${id} categorySi`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorySi`;
  }
}
