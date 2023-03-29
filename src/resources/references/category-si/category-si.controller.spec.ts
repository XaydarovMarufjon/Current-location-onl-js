import { Test, TestingModule } from '@nestjs/testing';
import { CategorySiController } from './category-si.controller';
import { CategorySiService } from './category-si.service';

describe('CategorySiController', () => {
  let controller: CategorySiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorySiController],
      providers: [CategorySiService],
    }).compile();

    controller = module.get<CategorySiController>(CategorySiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
