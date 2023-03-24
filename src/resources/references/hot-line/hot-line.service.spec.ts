import { Test, TestingModule } from '@nestjs/testing';
import { HotLineService } from './hot-line.service';

describe('HotLineService', () => {
  let service: HotLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotLineService],
    }).compile();

    service = module.get<HotLineService>(HotLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
