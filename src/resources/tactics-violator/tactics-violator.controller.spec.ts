import { Test, TestingModule } from '@nestjs/testing';
import { TacticsViolatorController } from './tactics-violator.controller';
import { TacticsViolatorService } from './tactics-violator.service';

describe('TacticsViolatorController', () => {
  let controller: TacticsViolatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TacticsViolatorController],
      providers: [TacticsViolatorService],
    }).compile();

    controller = module.get<TacticsViolatorController>(TacticsViolatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
