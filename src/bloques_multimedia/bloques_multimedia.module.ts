import { Module } from '@nestjs/common';
import { BloquesMultimediaService } from './bloques_multimedia.service';
import { BloquesMultimediaController } from './bloques_multimedia.controller';

@Module({
  controllers: [BloquesMultimediaController],
  providers: [BloquesMultimediaService],
})
export class BloquesMultimediaModule {}
