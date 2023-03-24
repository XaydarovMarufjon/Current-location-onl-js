import { Test, TestingModule } from '@nestjs/testing';
import { IdentifiedUgService } from './identified-ug.service';

describe('IdentifiedUgService', () => {
  let service: IdentifiedUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentifiedUgService],
    }).compile();

    service = module.get<IdentifiedUgService>(IdentifiedUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
