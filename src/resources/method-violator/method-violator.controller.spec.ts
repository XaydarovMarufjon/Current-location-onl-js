import { Test, TestingModule } from '@nestjs/testing';
import { MethodViolatorController } from './method-violator.controller';
import { MethodViolatorService } from './method-violator.service';

describe('MethodViolatorController', () => {
  let controller: MethodViolatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MethodViolatorController],
      providers: [MethodViolatorService],
    }).compile();

    controller = module.get<MethodViolatorController>(MethodViolatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
