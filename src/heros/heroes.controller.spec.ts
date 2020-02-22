import { Test, TestingModule } from '@nestjs/testing';
import { HeroesController } from './heroes.controller';

describe('Heros Controller', () => {
  let controller: HerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerosController],
    }).compile();

    controller = module.get<HerosController>(HerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
