import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationUgService } from './evaluation-ug.service';

describe('EvaluationUgService', () => {
  let service: EvaluationUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluationUgService],
    }).compile();

    service = module.get<EvaluationUgService>(EvaluationUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
