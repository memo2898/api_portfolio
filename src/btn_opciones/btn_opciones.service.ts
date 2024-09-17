import { Injectable } from '@nestjs/common';
import { CreateBtnOpcioneDto } from './dto/create-btn_opcione.dto';
import { UpdateBtnOpcioneDto } from './dto/update-btn_opcione.dto';

@Injectable()
export class BtnOpcionesService {
  create(createBtnOpcioneDto: CreateBtnOpcioneDto) {
    return 'This action adds a new btnOpcione';
  }

  findAll() {
    return `This action returns all btnOpciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} btnOpcione`;
  }

  update(id: number, updateBtnOpcioneDto: UpdateBtnOpcioneDto) {
    return `This action updates a #${id} btnOpcione`;
  }

  remove(id: number) {
    return `This action removes a #${id} btnOpcione`;
  }
}
