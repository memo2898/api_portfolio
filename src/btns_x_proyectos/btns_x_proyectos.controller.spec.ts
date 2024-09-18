import { Test, TestingModule } from '@nestjs/testing';
import { BtnsXProyectosController } from './btns_x_proyectos.controller';
import { BtnsXProyectosService } from './btns_x_proyectos.service';

describe('BtnsXProyectosController', () => {
  let controller: BtnsXProyectosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BtnsXProyectosController],
      providers: [BtnsXProyectosService],
    }).compile();

    controller = module.get<BtnsXProyectosController>(BtnsXProyectosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
