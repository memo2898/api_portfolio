import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoMultimediaController } from './contenido_multimedia.controller';
import { ContenidoMultimediaService } from './contenido_multimedia.service';

describe('ContenidoMultimediaController', () => {
  let controller: ContenidoMultimediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidoMultimediaController],
      providers: [ContenidoMultimediaService],
    }).compile();

    controller = module.get<ContenidoMultimediaController>(
      ContenidoMultimediaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
