import { Test, TestingModule } from '@nestjs/testing';
import { ExactTypeController } from './exact-type.controller';
import { ExactTypeService } from './exact-type.service';

describe('ExactTypeController', () => {
  let controller: ExactTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExactTypeController],
      providers: [ExactTypeService],
    }).compile();

    controller = module.get<ExactTypeController>(ExactTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
