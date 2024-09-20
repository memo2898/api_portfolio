import { Test, TestingModule } from '@nestjs/testing';
import { HabilidadesXProyectosController } from './habilidades_x_proyectos.controller';
import { HabilidadesXProyectosService } from './habilidades_x_proyectos.service';

describe('HabilidadesXProyectosController', () => {
  let controller: HabilidadesXProyectosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabilidadesXProyectosController],
      providers: [HabilidadesXProyectosService],
    }).compile();

    controller = module.get<HabilidadesXProyectosController>(HabilidadesXProyectosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
