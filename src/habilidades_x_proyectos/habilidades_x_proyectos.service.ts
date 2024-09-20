import { Injectable } from '@nestjs/common';
import { CreateHabilidadesXProyectoDto } from './dto/create-habilidades_x_proyecto.dto';
import { UpdateHabilidadesXProyectoDto } from './dto/update-habilidades_x_proyecto.dto';

@Injectable()
export class HabilidadesXProyectosService {
  create(createHabilidadesXProyectoDto: CreateHabilidadesXProyectoDto) {
    return 'This action adds a new habilidadesXProyecto';
  }

  findAll() {
    return `This action returns all habilidadesXProyectos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habilidadesXProyecto`;
  }

  update(id: number, updateHabilidadesXProyectoDto: UpdateHabilidadesXProyectoDto) {
    return `This action updates a #${id} habilidadesXProyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} habilidadesXProyecto`;
  }
}
