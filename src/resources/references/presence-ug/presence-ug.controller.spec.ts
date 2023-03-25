import { Test, TestingModule } from '@nestjs/testing';
import { PresenceUgController } from './presence-ug.controller';
import { PresenceUgService } from './presence-ug.service';

describe('PresenceUgController', () => {
  let controller: PresenceUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresenceUgController],
      providers: [PresenceUgService],
    }).compile();

    controller = module.get<PresenceUgController>(PresenceUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
