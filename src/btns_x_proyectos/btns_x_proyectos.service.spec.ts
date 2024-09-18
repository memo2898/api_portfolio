import { Test, TestingModule } from '@nestjs/testing';
import { BtnsXProyectosService } from './btns_x_proyectos.service';

describe('BtnsXProyectosService', () => {
  let service: BtnsXProyectosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BtnsXProyectosService],
    }).compile();

    service = module.get<BtnsXProyectosService>(BtnsXProyectosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
