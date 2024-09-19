import { Test, TestingModule } from '@nestjs/testing';
import { TiposHabilidadesService } from './tipos_habilidades.service';

describe('TiposHabilidadesService', () => {
  let service: TiposHabilidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposHabilidadesService],
    }).compile();

    service = module.get<TiposHabilidadesService>(TiposHabilidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
