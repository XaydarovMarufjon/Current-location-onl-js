import { Test, TestingModule } from '@nestjs/testing';
import { HarmfulDomainEmailController } from './harmful-domain-email.controller';
import { HarmfulDomainEmailService } from './harmful-domain-email.service';

describe('HarmfulDomainEmailController', () => {
  let controller: HarmfulDomainEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarmfulDomainEmailController],
      providers: [HarmfulDomainEmailService],
    }).compile();

    controller = module.get<HarmfulDomainEmailController>(HarmfulDomainEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
