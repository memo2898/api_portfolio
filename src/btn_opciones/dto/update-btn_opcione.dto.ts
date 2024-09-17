import { PartialType } from '@nestjs/swagger';
import { CreateBtnOpcioneDto } from './create-btn_opcione.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBtnOpcioneDto extends PartialType(CreateBtnOpcioneDto) {
  @IsString()
  @IsNotEmpty()
  modificado_por: string;

  @IsString()
  @IsNotEmpty()
  modificado_en: string;
}
