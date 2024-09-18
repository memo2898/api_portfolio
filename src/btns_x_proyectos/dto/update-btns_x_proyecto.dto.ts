import { PartialType } from '@nestjs/swagger';
import { CreateBtnsXProyectoDto } from './create-btns_x_proyecto.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateBtnsXProyectoDto extends PartialType(
  CreateBtnsXProyectoDto,
) {
  @IsNumber()
  @IsNotEmpty()
  modificado_por: string;

  @IsNumber()
  @IsNotEmpty()
  modificado_en: string;
}
