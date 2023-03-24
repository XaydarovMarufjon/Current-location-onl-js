import { Test, TestingModule } from '@nestjs/testing';
import { TypeComputerController } from './type-computer.controller';
import { TypeComputerService } from './type-computer.service';

describe('TypeComputerController', () => {
  let controller: TypeComputerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeComputerController],
      providers: [TypeComputerService],
    }).compile();

    controller = module.get<TypeComputerController>(TypeComputerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
