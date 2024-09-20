import { Test, TestingModule } from '@nestjs/testing';
import { HabilidadesXProyectosService } from './habilidades_x_proyectos.service';

describe('HabilidadesXProyectosService', () => {
  let service: HabilidadesXProyectosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabilidadesXProyectosService],
    }).compile();

    service = module.get<HabilidadesXProyectosService>(HabilidadesXProyectosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
