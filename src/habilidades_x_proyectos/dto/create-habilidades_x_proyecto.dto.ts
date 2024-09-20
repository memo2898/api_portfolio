import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHabilidadesXProyectoDto {
  @ApiProperty({ example: '2' })
  @IsNotEmpty()
  @IsNumber()
  id_proyecto: number;

  @ApiProperty({ example: '2' })
  @IsNotEmpty()
  @IsNumber()
  id_habilidad: number;

  @ApiProperty({ example: 'activo' })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({ example: 'admin' })
  @IsNotEmpty()
  @IsString()
  agregado_por: string;

  @ApiProperty({ example: '2022-02-02' })
  @IsNotEmpty()
  @IsString()
  agregado_en: string;
}
