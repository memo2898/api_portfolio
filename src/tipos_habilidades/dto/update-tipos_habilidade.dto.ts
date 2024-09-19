import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTiposHabilidadeDto } from './create-tipos_habilidade.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTiposHabilidadeDto extends PartialType(
  CreateTiposHabilidadeDto,
) {
  @IsString()
  @IsNotEmpty()
  modificado_en: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  modificado_por: string;
}
