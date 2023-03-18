import { Test, TestingModule } from '@nestjs/testing';
import { DetectedStatusService } from './detected-status.service';

describe('DetectedStatusService', () => {
  let service: DetectedStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetectedStatusService],
    }).compile();

    service = module.get<DetectedStatusService>(DetectedStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
