import { Test, TestingModule } from '@nestjs/testing';
import { AsDetectedController } from './as-detected.controller';
import { AsDetectedService } from './as-detected.service';

describe('AsDetectedController', () => {
  let controller: AsDetectedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsDetectedController],
      providers: [AsDetectedService],
    }).compile();

    controller = module.get<AsDetectedController>(AsDetectedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
