import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeNameService } from './employee-name.service';

describe('EmployeeNameService', () => {
  let service: EmployeeNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeNameService],
    }).compile();

    service = module.get<EmployeeNameService>(EmployeeNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
