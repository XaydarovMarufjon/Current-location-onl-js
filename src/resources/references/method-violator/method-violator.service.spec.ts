import { Test, TestingModule } from '@nestjs/testing';
import { MethodViolatorService } from './method-violator.service';

describe('MethodViolatorService', () => {
  let service: MethodViolatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MethodViolatorService],
    }).compile();

    service = module.get<MethodViolatorService>(MethodViolatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
