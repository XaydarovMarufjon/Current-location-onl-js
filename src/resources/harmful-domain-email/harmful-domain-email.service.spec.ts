import { Test, TestingModule } from '@nestjs/testing';
import { HarmfulDomainEmailService } from './harmful-domain-email.service';

describe('HarmfulDomainEmailService', () => {
  let service: HarmfulDomainEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HarmfulDomainEmailService],
    }).compile();

    service = module.get<HarmfulDomainEmailService>(HarmfulDomainEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
