import { Test, TestingModule } from '@nestjs/testing';
import { ListOrgService } from './list-org.service';

describe('ListOrgService', () => {
  let service: ListOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOrgService],
    }).compile();

    service = module.get<ListOrgService>(ListOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
