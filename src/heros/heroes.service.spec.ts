import { Test, TestingModule } from '@nestjs/testing';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroesService],
    }).compile();

    service = module.get<HerosService>(HeroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
