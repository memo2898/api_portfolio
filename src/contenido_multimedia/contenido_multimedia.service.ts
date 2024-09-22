import { Injectable } from '@nestjs/common';
import { CreateContenidoMultimediaDto } from './dto/create-contenido_multimedia.dto';
import { UpdateContenidoMultimediaDto } from './dto/update-contenido_multimedia.dto';
import { Repository } from 'typeorm';
import { ContenidoMultimedia } from './entities/contenido_multimedia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContenidoMultimediaService {
  constructor(
    @InjectRepository(ContenidoMultimedia)
    private contenidoMultimediaRepository: Repository<ContenidoMultimedia>,
  ) {}
  async create(createContenidoMultimediaDto: CreateContenidoMultimediaDto) {
    const crear = this.contenidoMultimediaRepository.create(
      createContenidoMultimediaDto,
    );

    const guardar = await this.contenidoMultimediaRepository.save(crear);

    return await this.contenidoMultimediaRepository.findBy({ id: guardar.id });
  }

  async findAll() {
    return await this.contenidoMultimediaRepository.find();
  }

  async findOne(id: number) {
    return await this.contenidoMultimediaRepository.findBy({ id });
  }

  async update(
    id: number,
    updateContenidoMultimediaDto: UpdateContenidoMultimediaDto,
  ) {
    await this.contenidoMultimediaRepository.update(
      id,
      updateContenidoMultimediaDto,
    );
    return await this.contenidoMultimediaRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} contenidoMultimedia`;
  }
}
