import { Test, TestingModule } from '@nestjs/testing';
import { TypicalThreatController } from './typical-threat.controller';
import { TypicalThreatService } from './typical-threat.service';

describe('TypicalThreatController', () => {
  let controller: TypicalThreatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypicalThreatController],
      providers: [TypicalThreatService],
    }).compile();

    controller = module.get<TypicalThreatController>(TypicalThreatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
