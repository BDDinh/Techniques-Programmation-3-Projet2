import { Test, TestingModule } from '@nestjs/testing';
import { VolService } from './vol.service';

describe('VolService', () => {
  let service: VolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolService],
    }).compile();

    service = module.get<VolService>(VolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
