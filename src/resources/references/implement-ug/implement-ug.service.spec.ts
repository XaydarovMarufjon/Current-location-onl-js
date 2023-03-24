import { Test, TestingModule } from '@nestjs/testing';
import { ImplementUgService } from './implement-ug.service';

describe('ImplementUgService', () => {
  let service: ImplementUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImplementUgService],
    }).compile();

    service = module.get<ImplementUgService>(ImplementUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
