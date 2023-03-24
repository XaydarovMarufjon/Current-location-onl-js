import { Test, TestingModule } from '@nestjs/testing';
import { TypeIncidentController } from './type-incident.controller';
import { TypeIncidentService } from './type-incident.service';

describe('TypeIncidentController', () => {
  let controller: TypeIncidentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeIncidentController],
      providers: [TypeIncidentService],
    }).compile();

    controller = module.get<TypeIncidentController>(TypeIncidentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
