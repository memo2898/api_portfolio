import { Module } from '@nestjs/common';
import { TiposHabilidadesService } from './tipos_habilidades.service';
import { TiposHabilidadesController } from './tipos_habilidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposHabilidade } from './entities/tipos_habilidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposHabilidade])],
  controllers: [TiposHabilidadesController],
  providers: [TiposHabilidadesService],
})
export class TiposHabilidadesModule {}
