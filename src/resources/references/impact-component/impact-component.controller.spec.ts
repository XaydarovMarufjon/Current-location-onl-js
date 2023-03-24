import { Test, TestingModule } from '@nestjs/testing';
import { ImpactComponentController } from './impact-component.controller';
import { ImpactComponentService } from './impact-component.service';

describe('ImpactComponentController', () => {
  let controller: ImpactComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpactComponentController],
      providers: [ImpactComponentService],
    }).compile();

    controller = module.get<ImpactComponentController>(ImpactComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
