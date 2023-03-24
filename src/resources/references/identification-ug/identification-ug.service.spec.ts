import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationUgService } from './identification-ug.service';

describe('IdentificationUgService', () => {
  let service: IdentificationUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentificationUgService],
    }).compile();

    service = module.get<IdentificationUgService>(IdentificationUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
