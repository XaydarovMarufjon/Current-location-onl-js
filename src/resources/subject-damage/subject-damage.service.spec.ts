import { Test, TestingModule } from '@nestjs/testing';
import { SubjectDamageService } from './subject-damage.service';

describe('SubjectDamageService', () => {
  let service: SubjectDamageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectDamageService],
    }).compile();

    service = module.get<SubjectDamageService>(SubjectDamageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
