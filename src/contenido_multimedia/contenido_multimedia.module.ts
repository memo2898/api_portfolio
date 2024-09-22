import { Module } from '@nestjs/common';
import { ContenidoMultimediaService } from './contenido_multimedia.service';
import { ContenidoMultimediaController } from './contenido_multimedia.controller';

@Module({
  controllers: [ContenidoMultimediaController],
  providers: [ContenidoMultimediaService],
})
export class ContenidoMultimediaModule {}
