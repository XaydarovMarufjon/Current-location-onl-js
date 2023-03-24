import { Test, TestingModule } from '@nestjs/testing';
import { HotLineController } from './hot-line.controller';
import { HotLineService } from './hot-line.service';

describe('HotLineController', () => {
  let controller: HotLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotLineController],
      providers: [HotLineService],
    }).compile();

    controller = module.get<HotLineController>(HotLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
