import { Test, TestingModule } from '@nestjs/testing';
import { AttackedDomainUriService } from './attacked-domain-uri.service';

describe('AttackedDomainUriService', () => {
  let service: AttackedDomainUriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttackedDomainUriService],
    }).compile();

    service = module.get<AttackedDomainUriService>(AttackedDomainUriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
