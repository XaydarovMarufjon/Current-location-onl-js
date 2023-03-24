import { Test, TestingModule } from '@nestjs/testing';
import { SortForceService } from './sort-force.service';

describe('SortForceService', () => {
  let service: SortForceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortForceService],
    }).compile();

    service = module.get<SortForceService>(SortForceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
