import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizationUgService } from './authorization-ug.service';

describe('AuthorizationUgService', () => {
  let service: AuthorizationUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorizationUgService],
    }).compile();

    service = module.get<AuthorizationUgService>(AuthorizationUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
