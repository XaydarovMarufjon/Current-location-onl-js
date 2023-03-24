import { Test, TestingModule } from '@nestjs/testing';
import { ImpactObjectService } from './impact-object.service';

describe('ImpactObjectService', () => {
  let service: ImpactObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactObjectService],
    }).compile();

    service = module.get<ImpactObjectService>(ImpactObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
