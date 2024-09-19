import { PartialType } from '@nestjs/swagger';
import { CreateHabilidadeDto } from './create-habilidade.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateHabilidadeDto extends PartialType(CreateHabilidadeDto) {
  @IsNotEmpty()
  @IsString()
  modificado_por: string;

  @IsNotEmpty()
  @IsString()
  modificado_en: string;
}
