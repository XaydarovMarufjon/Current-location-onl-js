import { Test, TestingModule } from '@nestjs/testing';
import { ExactTypeService } from './exact-type.service';

describe('ExactTypeService', () => {
  let service: ExactTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExactTypeService],
    }).compile();

    service = module.get<ExactTypeService>(ExactTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
