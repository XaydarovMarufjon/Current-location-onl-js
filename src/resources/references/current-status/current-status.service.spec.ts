import { Test, TestingModule } from '@nestjs/testing';
import { CurrentStatusService } from './current-status.service';

describe('CurrentStatusService', () => {
  let service: CurrentStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentStatusService],
    }).compile();

    service = module.get<CurrentStatusService>(CurrentStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
