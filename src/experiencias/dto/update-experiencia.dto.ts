import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienciaDto } from './create-experiencia.dto';
import { IsString } from 'class-validator';

export class UpdateExperienciaDto extends PartialType(CreateExperienciaDto) {
  @IsString()
  modificado_por: string;

  @IsString()
  modificado_en: string;
}
