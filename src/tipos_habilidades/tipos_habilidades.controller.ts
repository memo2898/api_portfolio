import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TiposHabilidadesService } from './tipos_habilidades.service';
import { CreateTiposHabilidadeDto } from './dto/create-tipos_habilidade.dto';
import { UpdateTiposHabilidadeDto } from './dto/update-tipos_habilidade.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo Habilidades')
@Controller('tipos-habilidades')
export class TiposHabilidadesController {
  constructor(
    private readonly tiposHabilidadesService: TiposHabilidadesService,
  ) {}

  @Post()
  create(@Body() createTiposHabilidadeDto: CreateTiposHabilidadeDto) {
    return this.tiposHabilidadesService.create(createTiposHabilidadeDto);
  }

  @Get()
  findAll() {
    return this.tiposHabilidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposHabilidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTiposHabilidadeDto: UpdateTiposHabilidadeDto,
  ) {
    return this.tiposHabilidadesService.update(+id, updateTiposHabilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposHabilidadesService.remove(+id);
  }
}
