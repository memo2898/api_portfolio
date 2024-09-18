import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BtnsXProyectosService } from './btns_x_proyectos.service';
import { CreateBtnsXProyectoDto } from './dto/create-btns_x_proyecto.dto';
import { UpdateBtnsXProyectoDto } from './dto/update-btns_x_proyecto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Btns x Proyecto')
@Controller('btns-x-proyectos')
export class BtnsXProyectosController {
  constructor(private readonly btnsXProyectosService: BtnsXProyectosService) {}

  @Post()
  create(@Body() createBtnsXProyectoDto: CreateBtnsXProyectoDto) {
    return this.btnsXProyectosService.create(createBtnsXProyectoDto);
  }

  @Get()
  findAll() {
    return this.btnsXProyectosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.btnsXProyectosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBtnsXProyectoDto: UpdateBtnsXProyectoDto,
  ) {
    return this.btnsXProyectosService.update(+id, updateBtnsXProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.btnsXProyectosService.remove(+id);
  }
}
