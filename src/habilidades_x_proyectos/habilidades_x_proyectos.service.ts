import { Injectable } from '@nestjs/common';
import { CreateHabilidadesXProyectoDto } from './dto/create-habilidades_x_proyecto.dto';
import { UpdateHabilidadesXProyectoDto } from './dto/update-habilidades_x_proyecto.dto';
import { Repository } from 'typeorm';
import { HabilidadesXProyecto } from './entities/habilidades_x_proyecto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HabilidadesXProyectosService {
  constructor(
    @InjectRepository(HabilidadesXProyecto)
    private habilidadesXProyectosRepository: Repository<HabilidadesXProyecto>,
  ) {}
  async create(createHabilidadesXProyectoDto: CreateHabilidadesXProyectoDto) {
    const crear = this.habilidadesXProyectosRepository.create(
      createHabilidadesXProyectoDto,
    );

    const guardar = await this.habilidadesXProyectosRepository.save(crear);

    return guardar;
  }

  async findAll() {
    return await this.habilidadesXProyectosRepository.find();
  }

  async findOne(id: number) {
    return await this.habilidadesXProyectosRepository.findBy({ id });
  }

  async update(
    id: number,
    updateHabilidadesXProyectoDto: UpdateHabilidadesXProyectoDto,
  ) {
    await this.habilidadesXProyectosRepository.update(
      id,
      updateHabilidadesXProyectoDto,
    );
    return await this.habilidadesXProyectosRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} habilidadesXProyecto`;
  }
}
