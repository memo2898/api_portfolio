import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsString()
  @IsNotEmpty()
  modificado_por: string;

  @IsString()
  @IsNotEmpty()
  modificado_en: string;
}
