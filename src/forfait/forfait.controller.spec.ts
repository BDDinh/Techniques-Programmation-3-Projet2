import { Test, TestingModule } from '@nestjs/testing';
import { ForfaitController } from './forfait.controller';
import { ForfaitService } from './forfait.service';

describe('ForfaitController', () => {
  let controller: ForfaitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForfaitController],
      providers: [ForfaitService],
    }).compile();

    controller = module.get<ForfaitController>(ForfaitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
