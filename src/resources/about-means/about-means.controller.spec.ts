import { Test, TestingModule } from '@nestjs/testing';
import { AboutMeansController } from './about-means.controller';
import { AboutMeansService } from './about-means.service';

describe('AboutMeansController', () => {
  let controller: AboutMeansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutMeansController],
      providers: [AboutMeansService],
    }).compile();

    controller = module.get<AboutMeansController>(AboutMeansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
