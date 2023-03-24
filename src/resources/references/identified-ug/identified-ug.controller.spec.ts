import { Test, TestingModule } from '@nestjs/testing';
import { IdentifiedUgController } from './identified-ug.controller';
import { IdentifiedUgService } from './identified-ug.service';

describe('IdentifiedUgController', () => {
  let controller: IdentifiedUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentifiedUgController],
      providers: [IdentifiedUgService],
    }).compile();

    controller = module.get<IdentifiedUgController>(IdentifiedUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
