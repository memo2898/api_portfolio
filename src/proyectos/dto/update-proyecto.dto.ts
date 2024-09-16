import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from './create-proyecto.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {
  @IsString()
  @IsOptional()
  modificado_por: string;

  @IsString()
  @IsOptional()
  modificado_en: string;
}
