import { Module } from '@nestjs/common';
import { BloquesMultimediaService } from './bloques_multimedia.service';
import { BloquesMultimediaController } from './bloques_multimedia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloquesMultimedia } from './entities/bloques_multimedia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloquesMultimedia])],
  controllers: [BloquesMultimediaController],
  providers: [BloquesMultimediaService],
})
export class BloquesMultimediaModule {}
