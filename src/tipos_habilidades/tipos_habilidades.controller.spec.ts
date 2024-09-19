import { Test, TestingModule } from '@nestjs/testing';
import { TiposHabilidadesController } from './tipos_habilidades.controller';
import { TiposHabilidadesService } from './tipos_habilidades.service';

describe('TiposHabilidadesController', () => {
  let controller: TiposHabilidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposHabilidadesController],
      providers: [TiposHabilidadesService],
    }).compile();

    controller = module.get<TiposHabilidadesController>(TiposHabilidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
