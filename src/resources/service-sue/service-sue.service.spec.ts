import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSueService } from './service-sue.service';

describe('ServiceSueService', () => {
  let service: ServiceSueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceSueService],
    }).compile();

    service = module.get<ServiceSueService>(ServiceSueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
