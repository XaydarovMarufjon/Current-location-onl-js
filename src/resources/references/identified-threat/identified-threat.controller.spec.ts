import { Test, TestingModule } from '@nestjs/testing';
import { IdentifiedThreatController } from './identified-threat.controller';
import { IdentifiedThreatService } from './identified-threat.service';

describe('IdentifiedThreatController', () => {
  let controller: IdentifiedThreatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentifiedThreatController],
      providers: [IdentifiedThreatService],
    }).compile();

    controller = module.get<IdentifiedThreatController>(IdentifiedThreatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
