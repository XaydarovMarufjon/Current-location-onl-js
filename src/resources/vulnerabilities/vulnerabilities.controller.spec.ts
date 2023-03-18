import { Test, TestingModule } from '@nestjs/testing';
import { VulnerabilitiesController } from './vulnerabilities.controller';
import { VulnerabilitiesService } from './vulnerabilities.service';

describe('VulnerabilitiesController', () => {
  let controller: VulnerabilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VulnerabilitiesController],
      providers: [VulnerabilitiesService],
    }).compile();

    controller = module.get<VulnerabilitiesController>(VulnerabilitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
