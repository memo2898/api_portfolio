import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateExperienciaDto {
  @ApiProperty({ example: 'Desarrollador jr' })
  @IsString()
  posicion: string;

  @ApiProperty({ example: 'Ministerio de Energias' })
  @IsString()
  institucion: string;

  @ApiProperty({ example: 'Colombia' })
  @IsString()
  pais: string;

  @ApiProperty({ example: 'En esta posicion desarrollé muchas aplicaciones' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: '2020-01-01' })
  @IsString()
  fecha_inicio: string;

  @ApiProperty({ example: '2020-01-01' })
  @IsString()
  fecha_fin: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  agregado_por: string;

  @ApiProperty({ example: '2020-01-01' })
  @IsString()
  agregado_en: string;
}
