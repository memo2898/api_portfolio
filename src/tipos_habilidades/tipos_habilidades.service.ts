import { Injectable } from '@nestjs/common';
import { CreateTiposHabilidadeDto } from './dto/create-tipos_habilidade.dto';
import { UpdateTiposHabilidadeDto } from './dto/update-tipos_habilidade.dto';
import { Repository } from 'typeorm';
import { TiposHabilidade } from './entities/tipos_habilidade.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TiposHabilidadesService {
  constructor(
    @InjectRepository(TiposHabilidade)
    private tipoHabilidadesRepository: Repository<TiposHabilidade>,
  ) {}

  async create(createTiposHabilidadeDto: CreateTiposHabilidadeDto) {
    const nuevo = this.tipoHabilidadesRepository.create(
      createTiposHabilidadeDto,
    );
    const guardando = await this.tipoHabilidadesRepository.save(nuevo);
    const id = guardando.id;

    return await this.tipoHabilidadesRepository.findBy({ id: id });
  }

  async findAll() {
    return await this.tipoHabilidadesRepository.find();
  }

  async findOne(id: number) {
    return await this.tipoHabilidadesRepository.findBy({ id });
  }

  async update(id: number, updateTiposHabilidadeDto: UpdateTiposHabilidadeDto) {
    await this.tipoHabilidadesRepository.update(id, updateTiposHabilidadeDto);

    return this.tipoHabilidadesRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} tiposHabilidade`;
  }
}
