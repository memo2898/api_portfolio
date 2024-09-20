import { Test, TestingModule } from '@nestjs/testing';
import { BloquesMultimediaController } from './bloques_multimedia.controller';
import { BloquesMultimediaService } from './bloques_multimedia.service';

describe('BloquesMultimediaController', () => {
  let controller: BloquesMultimediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloquesMultimediaController],
      providers: [BloquesMultimediaService],
    }).compile();

    controller = module.get<BloquesMultimediaController>(BloquesMultimediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
