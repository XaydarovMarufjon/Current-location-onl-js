import { Test, TestingModule } from '@nestjs/testing';
import { SubdepartmentService } from './subdepartment.service';

describe('SubdepartmentService', () => {
  let service: SubdepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubdepartmentService],
    }).compile();

    service = module.get<SubdepartmentService>(SubdepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
