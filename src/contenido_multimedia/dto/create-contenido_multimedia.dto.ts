import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContenidoMultimediaDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsNumber()
  id_bloque: number;

  @ApiProperty({ example: 'Foto de la ventana 1' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'https://...' })
  @IsNotEmpty()
  @IsString()
  contenido: string;

  @ApiProperty({
    example: 'Esta es la descripcion de este contenido multimedia',
  })
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 'JPG' })
  @IsNotEmpty()
  @IsString()
  formato: string;

  @ApiProperty({ example: 'Activo' })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({ example: 'Admin' })
  @IsNotEmpty()
  @IsString()
  agregado_por: string;

  @ApiProperty({ example: '2023-01-01' })
  @IsNotEmpty()
  @IsString()
  agregado_en: string;
}
