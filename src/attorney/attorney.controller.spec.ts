import { Test, TestingModule } from '@nestjs/testing';
import { AttorneyController } from './attorney.controller';
import { AttorneyService } from './attorney.service';

describe('AttorneyController', () => {
  let controller: AttorneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttorneyController],
      providers: [AttorneyService],
    }).compile();

    controller = module.get<AttorneyController>(AttorneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
