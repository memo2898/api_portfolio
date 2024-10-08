import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // UseGuards,
} from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Proyectos')
@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @Get()
  findAll() {
    return this.proyectosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proyectosService.findOne(+id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateProyectoDto: UpdateProyectoDto,
  ) {
    return this.proyectosService.update(+id, updateProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.proyectosService.remove(+id);
  }
}
