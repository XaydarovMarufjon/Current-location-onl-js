import { Test, TestingModule } from '@nestjs/testing';
import { ImpactUgController } from './impact-ug.controller';
import { ImpactUgService } from './impact-ug.service';

describe('ImpactUgController', () => {
  let controller: ImpactUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpactUgController],
      providers: [ImpactUgService],
    }).compile();

    controller = module.get<ImpactUgController>(ImpactUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
