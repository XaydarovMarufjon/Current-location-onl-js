import { Test, TestingModule } from '@nestjs/testing';
import { ConsequencesUgService } from './consequences-ug.service';

describe('ConsequencesUgService', () => {
  let service: ConsequencesUgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsequencesUgService],
    }).compile();

    service = module.get<ConsequencesUgService>(ConsequencesUgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
