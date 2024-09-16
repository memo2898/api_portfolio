import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProyectoDto {
  @ApiProperty({ example: 'Sistema de Gestión de Residuos Sólidos' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Este sistema se basó en ...' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 'Url de la portada' })
  @IsString()
  portada: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  agregado_por: string;

  @ApiProperty({ example: '2020-01-01' })
  @IsString()
  agregado_en: string;
}
