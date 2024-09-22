import { Module } from '@nestjs/common';
import { ContenidoMultimediaService } from './contenido_multimedia.service';
import { ContenidoMultimediaController } from './contenido_multimedia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidoMultimedia } from './entities/contenido_multimedia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidoMultimedia])],
  controllers: [ContenidoMultimediaController],
  providers: [ContenidoMultimediaService],
})
export class ContenidoMultimediaModule {}
