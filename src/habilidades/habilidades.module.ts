import { Module } from '@nestjs/common';
import { HabilidadesService } from './habilidades.service';
import { HabilidadesController } from './habilidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidade } from './entities/habilidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidade])],
  controllers: [HabilidadesController],
  providers: [HabilidadesService],
})
export class HabilidadesModule {}
