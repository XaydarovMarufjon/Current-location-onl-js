import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeNameController } from './employee-name.controller';
import { EmployeeNameService } from './employee-name.service';

describe('EmployeeNameController', () => {
  let controller: EmployeeNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeNameController],
      providers: [EmployeeNameService],
    }).compile();

    controller = module.get<EmployeeNameController>(EmployeeNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
