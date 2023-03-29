import { Module } from '@nestjs/common';
import { CategorySiService } from './category-si.service';
import { CategorySiController } from './category-si.controller';

@Module({
  controllers: [CategorySiController],
  providers: [CategorySiService]
})
export class CategorySiModule {}
