import { Test, TestingModule } from '@nestjs/testing';
import { ImplementUgController } from './implement-ug.controller';
import { ImplementUgService } from './implement-ug.service';

describe('ImplementUgController', () => {
  let controller: ImplementUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImplementUgController],
      providers: [ImplementUgService],
    }).compile();

    controller = module.get<ImplementUgController>(ImplementUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
