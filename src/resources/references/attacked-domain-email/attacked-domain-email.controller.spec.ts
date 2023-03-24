import { Test, TestingModule } from '@nestjs/testing';
import { AttackedDomainEmailController } from './attacked-domain-email.controller';
import { AttackedDomainEmailService } from './attacked-domain-email.service';

describe('AttackedDomainEmailController', () => {
  let controller: AttackedDomainEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttackedDomainEmailController],
      providers: [AttackedDomainEmailService],
    }).compile();

    controller = module.get<AttackedDomainEmailController>(AttackedDomainEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
