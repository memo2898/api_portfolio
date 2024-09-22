import { PartialType } from '@nestjs/swagger';
import { CreateContenidoMultimediaDto } from './create-contenido_multimedia.dto';

export class UpdateContenidoMultimediaDto extends PartialType(CreateContenidoMultimediaDto) {}
