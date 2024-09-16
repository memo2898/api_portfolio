import { Module } from '@nestjs/common';
import { ExperienciasService } from './experiencias.service';
import { ExperienciasController } from './experiencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experiencia } from './entities/experiencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Experiencia])],
  controllers: [ExperienciasController],
  providers: [ExperienciasService],
})
export class ExperienciasModule {}
