import { Test, TestingModule } from '@nestjs/testing';
import { SubjectDamageController } from './subject-damage.controller';
import { SubjectDamageService } from './subject-damage.service';

describe('SubjectDamageController', () => {
  let controller: SubjectDamageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectDamageController],
      providers: [SubjectDamageService],
    }).compile();

    controller = module.get<SubjectDamageController>(SubjectDamageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
