import { Test, TestingModule } from '@nestjs/testing';
import { ResGeographyService } from './res-geography.service';

describe('ResGeographyService', () => {
  let service: ResGeographyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResGeographyService],
    }).compile();

    service = module.get<ResGeographyService>(ResGeographyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
