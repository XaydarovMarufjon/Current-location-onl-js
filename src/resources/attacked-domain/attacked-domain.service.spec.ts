import { Test, TestingModule } from '@nestjs/testing';
import { AttackedDomainService } from './attacked-domain.service';

describe('AttackedDomainService', () => {
  let service: AttackedDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttackedDomainService],
    }).compile();

    service = module.get<AttackedDomainService>(AttackedDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
