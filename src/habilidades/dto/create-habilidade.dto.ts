import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHabilidadeDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsNotEmpty()
  id_tipo_habilidad: number;

  @ApiProperty({ example: 'NestJS' })
  @IsString()
  @IsNotEmpty()
  habilidad: string;

  @ApiProperty({ example: 'Nest es un framework que bla bla bla' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ example: 'https:// ...' })
  @IsString()
  @IsNotEmpty()
  imagen: string;

  @ApiProperty({ example: 'https:// ...' })
  @IsString()
  @IsNotEmpty()
  imagen_alt: string;

  @ApiProperty({ example: '2020-10-10' })
  @IsString()
  @IsNotEmpty()
  tiempo_inicio_aprendizaje: string;

  @ApiProperty({ example: 'activo' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2020-10-10' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;
}
