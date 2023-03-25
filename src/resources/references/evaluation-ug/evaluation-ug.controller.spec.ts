import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationUgController } from './evaluation-ug.controller';
import { EvaluationUgService } from './evaluation-ug.service';

describe('EvaluationUgController', () => {
  let controller: EvaluationUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluationUgController],
      providers: [EvaluationUgService],
    }).compile();

    controller = module.get<EvaluationUgController>(EvaluationUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
