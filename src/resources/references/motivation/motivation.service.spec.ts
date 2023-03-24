import { Test, TestingModule } from '@nestjs/testing';
import { MotivationService } from './motivation.service';

describe('MotivationService', () => {
  let service: MotivationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotivationService],
    }).compile();

    service = module.get<MotivationService>(MotivationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
