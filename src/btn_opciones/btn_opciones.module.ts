import { Module } from '@nestjs/common';
import { BtnOpcionesService } from './btn_opciones.service';
import { BtnOpcionesController } from './btn_opciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BtnOpcione } from './entities/btn_opcione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BtnOpcione])],
  controllers: [BtnOpcionesController],
  providers: [BtnOpcionesService],
})
export class BtnOpcionesModule {}
