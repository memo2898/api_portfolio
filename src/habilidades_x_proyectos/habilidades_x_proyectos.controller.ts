import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HabilidadesXProyectosService } from './habilidades_x_proyectos.service';
import { CreateHabilidadesXProyectoDto } from './dto/create-habilidades_x_proyecto.dto';
import { UpdateHabilidadesXProyectoDto } from './dto/update-habilidades_x_proyecto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Habilidades x Proyectos')
@Controller('habilidades-x-proyectos')
export class HabilidadesXProyectosController {
  constructor(
    private readonly habilidadesXProyectosService: HabilidadesXProyectosService,
  ) {}

  @Post()
  create(@Body() createHabilidadesXProyectoDto: CreateHabilidadesXProyectoDto) {
    return this.habilidadesXProyectosService.create(
      createHabilidadesXProyectoDto,
    );
  }

  @Get()
  findAll() {
    return this.habilidadesXProyectosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habilidadesXProyectosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabilidadesXProyectoDto: UpdateHabilidadesXProyectoDto,
  ) {
    return this.habilidadesXProyectosService.update(
      +id,
      updateHabilidadesXProyectoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habilidadesXProyectosService.remove(+id);
  }
}
