import { PartialType } from '@nestjs/swagger';
import { CreateContenidoMultimediaDto } from './create-contenido_multimedia.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateContenidoMultimediaDto extends PartialType(
  CreateContenidoMultimediaDto,
) {
  @IsNotEmpty()
  @IsString()
  modificado_por: string;

  @IsNotEmpty()
  @IsString()
  modificado_en: string;
}
