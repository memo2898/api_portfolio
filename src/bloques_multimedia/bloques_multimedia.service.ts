import { Injectable } from '@nestjs/common';
import { CreateBloquesMultimediaDto } from './dto/create-bloques_multimedia.dto';
import { UpdateBloquesMultimediaDto } from './dto/update-bloques_multimedia.dto';

@Injectable()
export class BloquesMultimediaService {
  create(createBloquesMultimediaDto: CreateBloquesMultimediaDto) {
    return 'This action adds a new bloquesMultimedia';
  }

  findAll() {
    return `This action returns all bloquesMultimedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloquesMultimedia`;
  }

  update(id: number, updateBloquesMultimediaDto: UpdateBloquesMultimediaDto) {
    return `This action updates a #${id} bloquesMultimedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloquesMultimedia`;
  }
}
