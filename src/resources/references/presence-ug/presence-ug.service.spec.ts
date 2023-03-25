import { Test, TestingModule } from '@nestjs/testing';
import { PresenceUgService } from './presence-ug.service';

describe('PresenceUgService', () => {
  let service: PresenceUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresenceUgService],
    }).compile();

    service = module.get<PresenceUgService>(PresenceUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
