import { Injectable } from '@nestjs/common';
import { CreateBtnsXProyectoDto } from './dto/create-btns_x_proyecto.dto';
import { UpdateBtnsXProyectoDto } from './dto/update-btns_x_proyecto.dto';
import { Repository } from 'typeorm';
import { BtnsXProyecto } from './entities/btns_x_proyecto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BtnsXProyectosService {
  constructor(
    @InjectRepository(BtnsXProyecto)
    private btns_x_proyectosRepository: Repository<BtnsXProyecto>,
  ) {}
  async create(createBtnsXProyectoDto: CreateBtnsXProyectoDto) {
    const creacion = this.btns_x_proyectosRepository.create(
      createBtnsXProyectoDto,
    );

    const guardando = await this.btns_x_proyectosRepository.save(creacion);

    return this.btns_x_proyectosRepository.findBy({ id: guardando.id });
  }

  async findAll() {
    return this.btns_x_proyectosRepository.find();
  }

  async findOne(id: number) {
    return this.btns_x_proyectosRepository.findBy({ id });
  }

  async update(id: number, updateBtnsXProyectoDto: UpdateBtnsXProyectoDto) {
    return await this.btns_x_proyectosRepository.update(
      id,
      updateBtnsXProyectoDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} btnsXProyecto`;
  }
}
