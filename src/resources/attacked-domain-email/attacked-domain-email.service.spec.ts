import { Test, TestingModule } from '@nestjs/testing';
import { AttackedDomainEmailService } from './attacked-domain-email.service';

describe('AttackedDomainEmailService', () => {
  let service: AttackedDomainEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttackedDomainEmailService],
    }).compile();

    service = module.get<AttackedDomainEmailService>(AttackedDomainEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
