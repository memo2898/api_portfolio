import { Injectable } from '@nestjs/common';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { Experiencia } from './entities/experiencia.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExperienciasService {
  constructor(
    @InjectRepository(Experiencia)
    private experienciaRepository: Repository<Experiencia>,
  ) {}

  async create(createExperienciaDto: CreateExperienciaDto) {
    const experiencia = this.experienciaRepository.create(createExperienciaDto);
    return this.experienciaRepository.save(experiencia);
  }

  async findAll() {
    return await this.experienciaRepository.find();
  }

  async findOne(id: number) {
    return await this.experienciaRepository.findBy({ id });
  }
  async update(id: number, updateExperienciaDto: UpdateExperienciaDto) {
    await this.experienciaRepository.update(id, updateExperienciaDto);
    return await this.experienciaRepository.findBy({ id });
  }

  async remove(id: number) {
    return `This action removes a #${id} experiencia`;
  }
}
