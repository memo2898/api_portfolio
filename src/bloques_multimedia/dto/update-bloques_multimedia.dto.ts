import { PartialType } from '@nestjs/swagger';
import { CreateBloquesMultimediaDto } from './create-bloques_multimedia.dto';

export class UpdateBloquesMultimediaDto extends PartialType(CreateBloquesMultimediaDto) {}
