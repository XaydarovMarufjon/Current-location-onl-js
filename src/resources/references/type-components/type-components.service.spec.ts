import { Test, TestingModule } from '@nestjs/testing';
import { TypeComponentsService } from './type-components.service';

describe('TypeComponentsService', () => {
  let service: TypeComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeComponentsService],
    }).compile();

    service = module.get<TypeComponentsService>(TypeComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
