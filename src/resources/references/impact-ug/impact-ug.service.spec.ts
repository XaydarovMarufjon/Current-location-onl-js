import { Test, TestingModule } from '@nestjs/testing';
import { ImpactUgService } from './impact-ug.service';

describe('ImpactUgService', () => {
  let service: ImpactUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactUgService],
    }).compile();

    service = module.get<ImpactUgService>(ImpactUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
