import { Test, TestingModule } from '@nestjs/testing';
import { IdentifiedThreatService } from './identified-threat.service';

describe('IdentifiedThreatService', () => {
  let service: IdentifiedThreatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentifiedThreatService],
    }).compile();

    service = module.get<IdentifiedThreatService>(IdentifiedThreatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
