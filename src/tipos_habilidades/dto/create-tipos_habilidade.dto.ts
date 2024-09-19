import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTiposHabilidadeDto {
  @ApiProperty({ example: 'Frontend' })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({ example: 'Aqui la descripcion' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2020-01-01' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;

  @ApiProperty({ example: 'Activo' })
  @IsString()
  @IsNotEmpty()
  estado: string;
}
