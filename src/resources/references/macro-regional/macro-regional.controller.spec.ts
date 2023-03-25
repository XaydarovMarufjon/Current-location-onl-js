import { Test, TestingModule } from '@nestjs/testing';
import { MacroRegionalController } from './macro-regional.controller';
import { MacroRegionalService } from './macro-regional.service';

describe('MacroRegionalController', () => {
  let controller: MacroRegionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MacroRegionalController],
      providers: [MacroRegionalService],
    }).compile();

    controller = module.get<MacroRegionalController>(MacroRegionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
