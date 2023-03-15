import { Test, TestingModule } from '@nestjs/testing';
import { ListOrgController } from './list-org.controller';
import { ListOrgService } from './list-org.service';

describe('ListOrgController', () => {
  let controller: ListOrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOrgController],
      providers: [ListOrgService],
    }).compile();

    controller = module.get<ListOrgController>(ListOrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
