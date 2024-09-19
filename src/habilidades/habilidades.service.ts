import { Injectable } from '@nestjs/common';
import { CreateHabilidadeDto } from './dto/create-habilidade.dto';
import { UpdateHabilidadeDto } from './dto/update-habilidade.dto';
import { Repository } from 'typeorm';
import { Habilidade } from './entities/habilidade.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HabilidadesService {
  constructor(
    @InjectRepository(Habilidade)
    private habilidadesRepository: Repository<Habilidade>,
  ) {}
  async create(createHabilidadeDto: CreateHabilidadeDto) {
    const crear = await this.habilidadesRepository.create(createHabilidadeDto);
    const guardar = await this.habilidadesRepository.save(crear);

    return this.habilidadesRepository.findBy({ id: guardar.id });
  }

  async findAll() {
    return await this.habilidadesRepository.find();
  }

  async findOne(id: number) {
    return await this.habilidadesRepository.findBy({ id });
  }

  async update(id: number, updateHabilidadeDto: UpdateHabilidadeDto) {
    await this.habilidadesRepository.update(id, updateHabilidadeDto);
    return await this.habilidadesRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} habilidade`;
  }
}
