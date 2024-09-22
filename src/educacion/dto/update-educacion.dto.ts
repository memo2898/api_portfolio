import { PartialType } from '@nestjs/swagger';
import { CreateEducacionDto } from './create-educacion.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEducacionDto extends PartialType(CreateEducacionDto) {
  @IsString()
  @IsNotEmpty()
  modificado_por: string;

  @IsString()
  @IsNotEmpty()
  modificado_en: string;
}
