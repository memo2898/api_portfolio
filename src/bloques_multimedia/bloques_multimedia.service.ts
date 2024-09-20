import { Injectable } from '@nestjs/common';
import { CreateBloquesMultimediaDto } from './dto/create-bloques_multimedia.dto';
import { UpdateBloquesMultimediaDto } from './dto/update-bloques_multimedia.dto';
import { Repository } from 'typeorm';
import { BloquesMultimedia } from './entities/bloques_multimedia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BloquesMultimediaService {
  constructor(
    @InjectRepository(BloquesMultimedia)
    private bloquesMultimediaRepository: Repository<BloquesMultimedia>,
  ) {}
  async create(createBloquesMultimediaDto: CreateBloquesMultimediaDto) {
    const crear = this.bloquesMultimediaRepository.create(
      createBloquesMultimediaDto,
    );

    const guardar = await this.bloquesMultimediaRepository.save(crear);

    return await this.bloquesMultimediaRepository.findBy({ id: guardar.id });
  }

  async findAll() {
    return await this.bloquesMultimediaRepository.find();
  }

  async findOne(id: number) {
    return await this.bloquesMultimediaRepository.findBy({ id });
  }

  async update(
    id: number,
    updateBloquesMultimediaDto: UpdateBloquesMultimediaDto,
  ) {
    await this.bloquesMultimediaRepository.update(
      id,
      updateBloquesMultimediaDto,
    );
    return await this.bloquesMultimediaRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} bloquesMultimedia`;
  }
}
