import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationUgController } from './identification-ug.controller';
import { IdentificationUgService } from './identification-ug.service';

describe('IdentificationUgController', () => {
  let controller: IdentificationUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentificationUgController],
      providers: [IdentificationUgService],
    }).compile();

    controller = module.get<IdentificationUgController>(IdentificationUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
