import { Test, TestingModule } from '@nestjs/testing';
import { CurrentStatusController } from './current-status.controller';
import { CurrentStatusService } from './current-status.service';

describe('CurrentStatusController', () => {
  let controller: CurrentStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentStatusController],
      providers: [CurrentStatusService],
    }).compile();

    controller = module.get<CurrentStatusController>(CurrentStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
