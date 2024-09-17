import { Injectable } from '@nestjs/common';
import { CreateBtnOpcioneDto } from './dto/create-btn_opcione.dto';
import { UpdateBtnOpcioneDto } from './dto/update-btn_opcione.dto';
import { Repository } from 'typeorm';
import { BtnOpcione } from './entities/btn_opcione.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BtnOpcionesService {
  constructor(
    @InjectRepository(BtnOpcione)
    private btnOpcionesRepository: Repository<BtnOpcione>,
  ) {}

  async create(createBtnOpcioneDto: CreateBtnOpcioneDto) {
    const creando = this.btnOpcionesRepository.create(createBtnOpcioneDto);
    const guardando = await this.btnOpcionesRepository.save(creando);

    return await this.btnOpcionesRepository.findBy({ id: guardando.id });
  }

  async findAll() {
    return await this.btnOpcionesRepository.find();
  }

  async findOne(id: number) {
    return await this.btnOpcionesRepository.findBy({ id });
  }

  async update(id: number, updateBtnOpcioneDto: UpdateBtnOpcioneDto) {
    await this.btnOpcionesRepository.update(id, updateBtnOpcioneDto);
    return await this.btnOpcionesRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} btnOpcione`;
  }
}
