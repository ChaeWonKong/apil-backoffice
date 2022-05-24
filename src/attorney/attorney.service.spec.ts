import { Test, TestingModule } from '@nestjs/testing';
import { AttorneyService } from './attorney.service';

describe('AttorneyService', () => {
  let service: AttorneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttorneyService],
    }).compile();

    service = module.get<AttorneyService>(AttorneyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
