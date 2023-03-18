import { Test, TestingModule } from '@nestjs/testing';
import { SortGravityController } from './sort-gravity.controller';
import { SortGravityService } from './sort-gravity.service';

describe('SortGravityController', () => {
  let controller: SortGravityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SortGravityController],
      providers: [SortGravityService],
    }).compile();

    controller = module.get<SortGravityController>(SortGravityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
