import { Test, TestingModule } from '@nestjs/testing';
import { SortForceController } from './sort-force.controller';
import { SortForceService } from './sort-force.service';

describe('SortForceController', () => {
  let controller: SortForceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SortForceController],
      providers: [SortForceService],
    }).compile();

    controller = module.get<SortForceController>(SortForceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
