import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BloquesMultimediaService } from './bloques_multimedia.service';
import { CreateBloquesMultimediaDto } from './dto/create-bloques_multimedia.dto';
import { UpdateBloquesMultimediaDto } from './dto/update-bloques_multimedia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bloques Multimedia')
@Controller('bloques-multimedia')
export class BloquesMultimediaController {
  constructor(
    private readonly bloquesMultimediaService: BloquesMultimediaService,
  ) {}

  @Post()
  create(@Body() createBloquesMultimediaDto: CreateBloquesMultimediaDto) {
    return this.bloquesMultimediaService.create(createBloquesMultimediaDto);
  }

  @Get()
  findAll() {
    return this.bloquesMultimediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloquesMultimediaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloquesMultimediaDto: UpdateBloquesMultimediaDto,
  ) {
    return this.bloquesMultimediaService.update(
      +id,
      updateBloquesMultimediaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloquesMultimediaService.remove(+id);
  }
}
