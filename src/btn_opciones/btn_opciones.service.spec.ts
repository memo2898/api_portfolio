import { Test, TestingModule } from '@nestjs/testing';
import { BtnOpcionesService } from './btn_opciones.service';

describe('BtnOpcionesService', () => {
  let service: BtnOpcionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BtnOpcionesService],
    }).compile();

    service = module.get<BtnOpcionesService>(BtnOpcionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
