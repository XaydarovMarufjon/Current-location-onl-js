import { Test, TestingModule } from '@nestjs/testing';
import { DamageFactorsService } from './damage-factors.service';

describe('DamageFactorsService', () => {
  let service: DamageFactorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DamageFactorsService],
    }).compile();

    service = module.get<DamageFactorsService>(DamageFactorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
