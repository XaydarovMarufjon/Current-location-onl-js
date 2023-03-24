import { Test, TestingModule } from '@nestjs/testing';
import { AttackedDomainController } from './attacked-domain.controller';
import { AttackedDomainService } from './attacked-domain.service';

describe('AttackedDomainController', () => {
  let controller: AttackedDomainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttackedDomainController],
      providers: [AttackedDomainService],
    }).compile();

    controller = module.get<AttackedDomainController>(AttackedDomainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
