import { Test, TestingModule } from '@nestjs/testing';
import { SortGravityService } from './sort-gravity.service';

describe('SortGravityService', () => {
  let service: SortGravityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortGravityService],
    }).compile();

    service = module.get<SortGravityService>(SortGravityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
