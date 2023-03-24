import { Test, TestingModule } from '@nestjs/testing';
import { GroupComponentsController } from './group-components.controller';
import { GroupComponentsService } from './group-components.service';

describe('GroupComponentsController', () => {
  let controller: GroupComponentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupComponentsController],
      providers: [GroupComponentsService],
    }).compile();

    controller = module.get<GroupComponentsController>(GroupComponentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
