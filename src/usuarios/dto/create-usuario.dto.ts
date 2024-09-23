import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'usuario.user' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'Arroz123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'usuario@example.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Manuel' })
  @IsString()
  @IsNotEmpty()
  nombres: string;

  @ApiProperty({ example: 'Maldonado' })
  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @ApiProperty({ example: 'Activo' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  agregado_por: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  @IsNotEmpty()
  agregado_en: string;
}
