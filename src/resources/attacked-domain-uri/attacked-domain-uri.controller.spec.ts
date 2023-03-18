import { Test, TestingModule } from '@nestjs/testing';
import { AttackedDomainUriController } from './attacked-domain-uri.controller';
import { AttackedDomainUriService } from './attacked-domain-uri.service';

describe('AttackedDomainUriController', () => {
  let controller: AttackedDomainUriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttackedDomainUriController],
      providers: [AttackedDomainUriService],
    }).compile();

    controller = module.get<AttackedDomainUriController>(AttackedDomainUriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
