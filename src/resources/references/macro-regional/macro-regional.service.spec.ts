import { Test, TestingModule } from '@nestjs/testing';
import { MacroRegionalService } from './macro-regional.service';

describe('MacroRegionalService', () => {
  let service: MacroRegionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacroRegionalService],
    }).compile();

    service = module.get<MacroRegionalService>(MacroRegionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
