import { Test, TestingModule } from '@nestjs/testing';
import { HarmfulDomainUriService } from './harmful-domain-uri.service';

describe('HarmfulDomainUriService', () => {
  let service: HarmfulDomainUriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HarmfulDomainUriService],
    }).compile();

    service = module.get<HarmfulDomainUriService>(HarmfulDomainUriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
