import { Test, TestingModule } from '@nestjs/testing';
import { DamageFactorsController } from './damage-factors.controller';
import { DamageFactorsService } from './damage-factors.service';

describe('DamageFactorsController', () => {
  let controller: DamageFactorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DamageFactorsController],
      providers: [DamageFactorsService],
    }).compile();

    controller = module.get<DamageFactorsController>(DamageFactorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
