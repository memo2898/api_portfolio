import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BtnOpcionesService } from './btn_opciones.service';
import { CreateBtnOpcioneDto } from './dto/create-btn_opcione.dto';
import { UpdateBtnOpcioneDto } from './dto/update-btn_opcione.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Btn Opciones')
@Controller('btn-opciones')
export class BtnOpcionesController {
  constructor(private readonly btnOpcionesService: BtnOpcionesService) {}

  @Post()
  create(@Body() createBtnOpcioneDto: CreateBtnOpcioneDto) {
    return this.btnOpcionesService.create(createBtnOpcioneDto);
  }

  @Get()
  findAll() {
    return this.btnOpcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.btnOpcionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBtnOpcioneDto: UpdateBtnOpcioneDto,
  ) {
    return this.btnOpcionesService.update(+id, updateBtnOpcioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.btnOpcionesService.remove(+id);
  }
}
