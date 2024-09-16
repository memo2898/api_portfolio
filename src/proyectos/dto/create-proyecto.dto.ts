import { IsString } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  portada: string;

  @IsString()
  agregado_por: string;

  @IsString()
  agregado_en: string;
}
