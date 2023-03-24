import { Test, TestingModule } from '@nestjs/testing';
import { TypeIncidentService } from './type-incident.service';

describe('TypeIncidentService', () => {
  let service: TypeIncidentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeIncidentService],
    }).compile();

    service = module.get<TypeIncidentService>(TypeIncidentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
