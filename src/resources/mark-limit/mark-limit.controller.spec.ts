import { Test, TestingModule } from '@nestjs/testing';
import { MarkLimitController } from './mark-limit.controller';
import { MarkLimitService } from './mark-limit.service';

describe('MarkLimitController', () => {
  let controller: MarkLimitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkLimitController],
      providers: [MarkLimitService],
    }).compile();

    controller = module.get<MarkLimitController>(MarkLimitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
