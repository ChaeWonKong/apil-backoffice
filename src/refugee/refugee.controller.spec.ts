import { Test, TestingModule } from '@nestjs/testing';
import { RefugeeController } from './refugee.controller';
import { RefugeeService } from './refugee.service';

describe('RefugeeController', () => {
  let controller: RefugeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefugeeController],
      providers: [RefugeeService],
    }).compile();

    controller = module.get<RefugeeController>(RefugeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
