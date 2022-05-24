import { Test, TestingModule } from '@nestjs/testing';
import { RefugeeService } from './refugee.service';

describe('RefugeeService', () => {
  let service: RefugeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefugeeService],
    }).compile();

    service = module.get<RefugeeService>(RefugeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
