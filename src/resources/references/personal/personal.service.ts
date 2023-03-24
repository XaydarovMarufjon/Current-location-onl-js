import { Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';

@Injectable()
export class PersonalService {
  create(createPersonalDto: CreatePersonalDto) {
    return 'This action adds a new personal';
  }

  findAll() {
    return `This action returns all personal`;
  }

  findOne(id: string) {
    return `This action returns a #${id} personal`;
  }

  update(id: string, updatePersonalDto: UpdatePersonalDto) {
    return `This action updates a #${id} personal`;
  }

  remove(id: string) {
    return `This action removes a #${id} personal`;
  }
}
