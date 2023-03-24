import { Test, TestingModule } from '@nestjs/testing';
import { EditEmployeeNameController } from './edit-employee-name.controller';
import { EditEmployeeNameService } from './edit-employee-name.service';

describe('EditEmployeeNameController', () => {
  let controller: EditEmployeeNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditEmployeeNameController],
      providers: [EditEmployeeNameService],
    }).compile();

    controller = module.get<EditEmployeeNameController>(EditEmployeeNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
