import { Test, TestingModule } from '@nestjs/testing';
import { VulnerabilitiesService } from './vulnerabilities.service';

describe('VulnerabilitiesService', () => {
  let service: VulnerabilitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VulnerabilitiesService],
    }).compile();

    service = module.get<VulnerabilitiesService>(VulnerabilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
