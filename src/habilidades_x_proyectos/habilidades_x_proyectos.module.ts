import { Module } from '@nestjs/common';
import { HabilidadesXProyectosService } from './habilidades_x_proyectos.service';
import { HabilidadesXProyectosController } from './habilidades_x_proyectos.controller';

@Module({
  controllers: [HabilidadesXProyectosController],
  providers: [HabilidadesXProyectosService],
})
export class HabilidadesXProyectosModule {}
