import { Test, TestingModule } from '@nestjs/testing';
import { TypeComputerService } from './type-computer.service';

describe('TypeComputerService', () => {
  let service: TypeComputerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeComputerService],
    }).compile();

    service = module.get<TypeComputerService>(TypeComputerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
