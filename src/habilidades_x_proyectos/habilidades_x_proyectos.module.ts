import { Module } from '@nestjs/common';
import { HabilidadesXProyectosService } from './habilidades_x_proyectos.service';
import { HabilidadesXProyectosController } from './habilidades_x_proyectos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabilidadesXProyecto } from './entities/habilidades_x_proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HabilidadesXProyecto])],
  controllers: [HabilidadesXProyectosController],
  providers: [HabilidadesXProyectosService],
})
export class HabilidadesXProyectosModule {}
