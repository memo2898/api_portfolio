import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  async create(createProyectoDto: CreateProyectoDto) {
    const nuevo = this.proyectoRepository.create(createProyectoDto);
    const guardando = await this.proyectoRepository.save(nuevo);
    const id = guardando.id;

    return await this.proyectoRepository.findBy({ id: id });
  }

  async findAll() {
    return await this.proyectoRepository.find();
  }

  async findOne(id: number) {
    return await this.proyectoRepository.findBy({ id });
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto) {
    await this.proyectoRepository.update(id, updateProyectoDto);
    return await this.proyectoRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
