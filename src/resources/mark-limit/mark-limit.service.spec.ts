import { Test, TestingModule } from '@nestjs/testing';
import { MarkLimitService } from './mark-limit.service';

describe('MarkLimitService', () => {
  let service: MarkLimitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkLimitService],
    }).compile();

    service = module.get<MarkLimitService>(MarkLimitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
