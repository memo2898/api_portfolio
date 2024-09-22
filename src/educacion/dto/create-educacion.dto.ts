import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEducacionDto {
  @ApiProperty({ example: 'Ingenieria de Sistemas' })
  @IsString()
  @IsNotEmpty()
  carrera: string;

  @ApiProperty({ example: 'Universidad Dominicana 0&M' })
  @IsString()
  @IsNotEmpty()
  institucion: string;

  @ApiProperty({ example: 'República Dominicana' })
  @IsString()
  @IsNotEmpty()
  pais: string;

  @ApiProperty({ example: 'Descripcion de la carrera' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ example: '2017-01-01' })
  @IsString()
  @IsNotEmpty()
  fecha_inicio: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  @IsNotEmpty()
  fecha_fin: string;

  @ApiProperty({ example: 'Activo' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2017-01-01' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;
}
