import { Injectable } from '@nestjs/common';
import { CreateContenidoMultimediaDto } from './dto/create-contenido_multimedia.dto';
import { UpdateContenidoMultimediaDto } from './dto/update-contenido_multimedia.dto';

@Injectable()
export class ContenidoMultimediaService {
  create(createContenidoMultimediaDto: CreateContenidoMultimediaDto) {
    return 'This action adds a new contenidoMultimedia';
  }

  findAll() {
    return `This action returns all contenidoMultimedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contenidoMultimedia`;
  }

  update(id: number, updateContenidoMultimediaDto: UpdateContenidoMultimediaDto) {
    return `This action updates a #${id} contenidoMultimedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} contenidoMultimedia`;
  }
}
