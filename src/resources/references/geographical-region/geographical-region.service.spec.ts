import { Test, TestingModule } from '@nestjs/testing';
import { GeographicalRegionService } from './geographical-region.service';

describe('GeographicalRegionService', () => {
  let service: GeographicalRegionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeographicalRegionService],
    }).compile();

    service = module.get<GeographicalRegionService>(GeographicalRegionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
