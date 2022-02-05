import { Test, TestingModule } from '@nestjs/testing';
import { VolController } from './vol.controller';

describe('VolController', () => {
  let controller: VolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolController],
    }).compile();

    controller = module.get<VolController>(VolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
