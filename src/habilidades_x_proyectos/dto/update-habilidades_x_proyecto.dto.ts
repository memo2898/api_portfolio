import { PartialType } from '@nestjs/swagger';
import { CreateHabilidadesXProyectoDto } from './create-habilidades_x_proyecto.dto';

export class UpdateHabilidadesXProyectoDto extends PartialType(CreateHabilidadesXProyectoDto) {
    modificado_por: string;
    modificado_en: string;
}
