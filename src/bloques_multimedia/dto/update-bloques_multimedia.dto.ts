import { PartialType } from '@nestjs/swagger';
import { CreateBloquesMultimediaDto } from './create-bloques_multimedia.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBloquesMultimediaDto extends PartialType(
  CreateBloquesMultimediaDto,
) {
  @IsString()
  @IsNotEmpty()
  modificado_por: string;

  @IsString()
  @IsNotEmpty()
  modificado_en: string;
}
