import { Test, TestingModule } from '@nestjs/testing';
import { ImpactComponentService } from './impact-component.service';

describe('ImpactComponentService', () => {
  let service: ImpactComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactComponentService],
    }).compile();

    service = module.get<ImpactComponentService>(ImpactComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
