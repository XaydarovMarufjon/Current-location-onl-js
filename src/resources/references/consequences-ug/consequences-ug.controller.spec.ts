import { Test, TestingModule } from '@nestjs/testing';
import { ConsequencesUgController } from './consequences-ug.controller';
import { ConsequencesUgService } from './consequences-ug.service';

describe('ConsequencesUgController', () => {
  let controller: ConsequencesUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsequencesUgController],
      providers: [ConsequencesUgService],
    }).compile();

    controller = module.get<ConsequencesUgController>(ConsequencesUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
