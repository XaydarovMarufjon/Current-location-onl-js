import { Test, TestingModule } from '@nestjs/testing';
import { EditEmployeeNameService } from './edit-employee-name.service';

describe('EditEmployeeNameService', () => {
  let service: EditEmployeeNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditEmployeeNameService],
    }).compile();

    service = module.get<EditEmployeeNameService>(EditEmployeeNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
