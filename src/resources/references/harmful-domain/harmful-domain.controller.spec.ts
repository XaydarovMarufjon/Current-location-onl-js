import { Test, TestingModule } from '@nestjs/testing';
import { HarmfulDomainController } from './harmful-domain.controller';
import { HarmfulDomainService } from './harmful-domain.service';

describe('HarmfulDomainController', () => {
  let controller: HarmfulDomainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarmfulDomainController],
      providers: [HarmfulDomainService],
    }).compile();

    controller = module.get<HarmfulDomainController>(HarmfulDomainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
