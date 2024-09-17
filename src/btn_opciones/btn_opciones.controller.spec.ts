import { Test, TestingModule } from '@nestjs/testing';
import { BtnOpcionesController } from './btn_opciones.controller';
import { BtnOpcionesService } from './btn_opciones.service';

describe('BtnOpcionesController', () => {
  let controller: BtnOpcionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BtnOpcionesController],
      providers: [BtnOpcionesService],
    }).compile();

    controller = module.get<BtnOpcionesController>(BtnOpcionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
