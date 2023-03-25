import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizationUgController } from './authorization-ug.controller';
import { AuthorizationUgService } from './authorization-ug.service';

describe('AuthorizationUgController', () => {
  let controller: AuthorizationUgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorizationUgController],
      providers: [AuthorizationUgService],
    }).compile();

    controller = module.get<AuthorizationUgController>(AuthorizationUgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
