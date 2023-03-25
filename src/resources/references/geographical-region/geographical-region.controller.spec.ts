import { Test, TestingModule } from '@nestjs/testing';
import { GeographicalRegionController } from './geographical-region.controller';
import { GeographicalRegionService } from './geographical-region.service';

describe('GeographicalRegionController', () => {
  let controller: GeographicalRegionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeographicalRegionController],
      providers: [GeographicalRegionService],
    }).compile();

    controller = module.get<GeographicalRegionController>(GeographicalRegionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
