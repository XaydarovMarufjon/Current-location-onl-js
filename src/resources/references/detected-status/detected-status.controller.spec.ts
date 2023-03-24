import { Test, TestingModule } from '@nestjs/testing';
import { DetectedStatusController } from './detected-status.controller';
import { DetectedStatusService } from './detected-status.service';

describe('DetectedStatusController', () => {
  let controller: DetectedStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetectedStatusController],
      providers: [DetectedStatusService],
    }).compile();

    controller = module.get<DetectedStatusController>(DetectedStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
