import { Test, TestingModule } from '@nestjs/testing';
import { GroupComponentsService } from './group-components.service';

describe('GroupComponentsService', () => {
  let service: GroupComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupComponentsService],
    }).compile();

    service = module.get<GroupComponentsService>(GroupComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
