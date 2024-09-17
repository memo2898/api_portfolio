import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBtnOpcioneDto {
  @ApiProperty({ example: 'GitHub' })
  @IsString()
  @IsNotEmpty()
  label: string;

  @ApiProperty({ example: 'https://mi-almacen.com/url' })
  @IsString()
  @IsNotEmpty()
  icono: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2023-01-01' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;
}
