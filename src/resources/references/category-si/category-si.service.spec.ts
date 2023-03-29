import { Test, TestingModule } from '@nestjs/testing';
import { CategorySiService } from './category-si.service';

describe('CategorySiService', () => {
  let service: CategorySiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorySiService],
    }).compile();

    service = module.get<CategorySiService>(CategorySiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
