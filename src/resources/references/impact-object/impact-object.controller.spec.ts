import { Test, TestingModule } from '@nestjs/testing';
import { ImpactObjectController } from './impact-object.controller';
import { ImpactObjectService } from './impact-object.service';

describe('ImpactObjectController', () => {
  let controller: ImpactObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpactObjectController],
      providers: [ImpactObjectService],
    }).compile();

    controller = module.get<ImpactObjectController>(ImpactObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
