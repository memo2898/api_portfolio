import { Test, TestingModule } from '@nestjs/testing';
import { BloquesMultimediaService } from './bloques_multimedia.service';

describe('BloquesMultimediaService', () => {
  let service: BloquesMultimediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloquesMultimediaService],
    }).compile();

    service = module.get<BloquesMultimediaService>(BloquesMultimediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
