import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBloquesMultimediaDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsNotEmpty()
  index: number;

  @ApiProperty({ example: '3' })
  @IsNumber()
  @IsNotEmpty()
  id_proyecto: number;

  @ApiProperty({ example: 'Ventana 1' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'Activo' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2020-01-01' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;
}
