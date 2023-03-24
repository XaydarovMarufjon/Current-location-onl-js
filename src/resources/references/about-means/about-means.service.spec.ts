import { Test, TestingModule } from '@nestjs/testing';
import { AboutMeansService } from './about-means.service';

describe('AboutMeansService', () => {
  let service: AboutMeansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutMeansService],
    }).compile();

    service = module.get<AboutMeansService>(AboutMeansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
