import { Module } from '@nestjs/common';
import { EducacionService } from './educacion.service';
import { EducacionController } from './educacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Educacion } from './entities/educacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Educacion])],
  controllers: [EducacionController],
  providers: [EducacionService],
})
export class EducacionModule {}
