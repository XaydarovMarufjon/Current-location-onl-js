import { Test, TestingModule } from '@nestjs/testing';
import { ResGeographyController } from './res-geography.controller';
import { ResGeographyService } from './res-geography.service';

describe('ResGeographyController', () => {
  let controller: ResGeographyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResGeographyController],
      providers: [ResGeographyService],
    }).compile();

    controller = module.get<ResGeographyController>(ResGeographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
