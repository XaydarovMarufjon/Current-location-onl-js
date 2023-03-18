import { Test, TestingModule } from '@nestjs/testing';
import { AsDetectedService } from './as-detected.service';

describe('AsDetectedService', () => {
  let service: AsDetectedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsDetectedService],
    }).compile();

    service = module.get<AsDetectedService>(AsDetectedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
