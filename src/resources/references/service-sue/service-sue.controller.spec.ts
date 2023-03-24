import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSueController } from './service-sue.controller';
import { ServiceSueService } from './service-sue.service';

describe('ServiceSueController', () => {
  let controller: ServiceSueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceSueController],
      providers: [ServiceSueService],
    }).compile();

    controller = module.get<ServiceSueController>(ServiceSueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
