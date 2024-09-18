import { Module } from '@nestjs/common';
import { BtnsXProyectosService } from './btns_x_proyectos.service';
import { BtnsXProyectosController } from './btns_x_proyectos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BtnsXProyecto } from './entities/btns_x_proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BtnsXProyecto])],
  controllers: [BtnsXProyectosController],
  providers: [BtnsXProyectosService],
})
export class BtnsXProyectosModule {}
