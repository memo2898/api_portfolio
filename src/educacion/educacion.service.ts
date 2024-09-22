import { Injectable } from '@nestjs/common';
import { CreateEducacionDto } from './dto/create-educacion.dto';
import { UpdateEducacionDto } from './dto/update-educacion.dto';
import { Repository } from 'typeorm';
import { Educacion } from './entities/educacion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EducacionService {
  constructor(
    @InjectRepository(Educacion)
    private educacionRepository: Repository<Educacion>,
  ) {}

  // Crear una nueva educación
  async create(createEducacionDto: CreateEducacionDto) {
    const nuevaEducacion = this.educacionRepository.create(createEducacionDto);
    return this.educacionRepository.save(nuevaEducacion);
  }

  // Obtener todas las educaciones
  async findAll() {
    return this.educacionRepository.find();
  }

  // Obtener una educación por su ID
  async findOne(id: number) {
    return this.educacionRepository.findOne({ where: { id } });
  }

  // Actualizar una educación por su ID
  async update(id: number, updateEducacionDto: UpdateEducacionDto) {
    await this.educacionRepository.update(id, updateEducacionDto);
    return this.educacionRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} educacion`;
  }
}
