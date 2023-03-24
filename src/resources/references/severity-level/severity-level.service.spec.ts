import { Test, TestingModule } from '@nestjs/testing';
import { SeverityLevelService } from './severity-level.service';

describe('SeverityLevelService', () => {
  let service: SeverityLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeverityLevelService],
    }).compile();

    service = module.get<SeverityLevelService>(SeverityLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
