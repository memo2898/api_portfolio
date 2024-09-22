import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoMultimediaService } from './contenido_multimedia.service';
import { CreateContenidoMultimediaDto } from './dto/create-contenido_multimedia.dto';
import { UpdateContenidoMultimediaDto } from './dto/update-contenido_multimedia.dto';

@Controller('contenido-multimedia')
export class ContenidoMultimediaController {
  constructor(private readonly contenidoMultimediaService: ContenidoMultimediaService) {}

  @Post()
  create(@Body() createContenidoMultimediaDto: CreateContenidoMultimediaDto) {
    return this.contenidoMultimediaService.create(createContenidoMultimediaDto);
  }

  @Get()
  findAll() {
    return this.contenidoMultimediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contenidoMultimediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContenidoMultimediaDto: UpdateContenidoMultimediaDto) {
    return this.contenidoMultimediaService.update(+id, updateContenidoMultimediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contenidoMultimediaService.remove(+id);
  }
}
