import { Test, TestingModule } from '@nestjs/testing';
import { TypeComponentsController } from './type-components.controller';
import { TypeComponentsService } from './type-components.service';

describe('TypeComponentsController', () => {
  let controller: TypeComponentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeComponentsController],
      providers: [TypeComponentsService],
    }).compile();

    controller = module.get<TypeComponentsController>(TypeComponentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
