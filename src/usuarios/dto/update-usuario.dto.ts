import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsNotEmpty()
  modificado_por: string;

  @IsString()
  @IsNotEmpty()
  modificado_en: string;
}
