import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBtnsXProyectoDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsNotEmpty()
  id_proyecto: number;

  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsNotEmpty()
  id_btn: number;

  @ApiProperty({ example: 'http://example.com' })
  @IsString()
  @IsNotEmpty()
  src: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2023-01-01' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;

  @ApiProperty({ example: 'Activo' })
  @IsString()
  @IsOptional()
  estado: string;
}
