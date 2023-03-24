import { Test, TestingModule } from '@nestjs/testing';
import { SeverityLevelController } from './severity-level.controller';
import { SeverityLevelService } from './severity-level.service';

describe('SeverityLevelController', () => {
  let controller: SeverityLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeverityLevelController],
      providers: [SeverityLevelService],
    }).compile();

    controller = module.get<SeverityLevelController>(SeverityLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
