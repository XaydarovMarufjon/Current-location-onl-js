import { Test, TestingModule } from '@nestjs/testing';
import { TypicalThreatService } from './typical-threat.service';

describe('TypicalThreatService', () => {
  let service: TypicalThreatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypicalThreatService],
    }).compile();

    service = module.get<TypicalThreatService>(TypicalThreatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
