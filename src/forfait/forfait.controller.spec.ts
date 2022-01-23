import { Test, TestingModule } from '@nestjs/testing';
import { ForfaitController } from './forfait.controller';
import { ForfaitService } from './forfait.service';
import { LoadDataInMongoDbserviceService } from './load-data-in-mongo-dbservice.service';

describe('ForfaitController', () => {
  let controller: ForfaitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForfaitController],
      providers: [ForfaitService, LoadDataInMongoDbserviceService],
    }).compile();

    controller = module.get<ForfaitController>(ForfaitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
