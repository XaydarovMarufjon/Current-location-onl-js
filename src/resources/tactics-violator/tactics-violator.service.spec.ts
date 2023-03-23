import { Test, TestingModule } from '@nestjs/testing';
import { TacticsViolatorService } from './tactics-violator.service';

describe('TacticsViolatorService', () => {
  let service: TacticsViolatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TacticsViolatorService],
    }).compile();

    service = module.get<TacticsViolatorService>(TacticsViolatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
