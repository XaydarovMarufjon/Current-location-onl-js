import { Test, TestingModule } from '@nestjs/testing';
import { HarmfulDomainUriController } from './harmful-domain-uri.controller';
import { HarmfulDomainUriService } from './harmful-domain-uri.service';

describe('HarmfulDomainUriController', () => {
  let controller: HarmfulDomainUriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarmfulDomainUriController],
      providers: [HarmfulDomainUriService],
    }).compile();

    controller = module.get<HarmfulDomainUriController>(HarmfulDomainUriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
