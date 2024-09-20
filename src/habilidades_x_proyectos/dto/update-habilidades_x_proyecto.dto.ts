import { PartialType } from '@nestjs/swagger';
import { CreateHabilidadesXProyectoDto } from './create-habilidades_x_proyecto.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateHabilidadesXProyectoDto extends PartialType(
  CreateHabilidadesXProyectoDto,
) {
  @IsNotEmpty()
  @IsString()
  modificado_por: string;

  @IsNotEmpty()
  @IsString()
  modificado_en: string;
}
