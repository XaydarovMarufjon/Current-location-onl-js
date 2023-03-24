import { Test, TestingModule } from '@nestjs/testing';
import { HarmfulDomainService } from './harmful-domain.service';

describe('HarmfulDomainService', () => {
  let service: HarmfulDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HarmfulDomainService],
    }).compile();

    service = module.get<HarmfulDomainService>(HarmfulDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
