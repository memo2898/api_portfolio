import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ExperienciasModule } from './experiencias/experiencias.module';
import { BtnOpcionesModule } from './btn_opciones/btn_opciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'portfolio_bd',
      autoLoadEntities: true,
      synchronize: false,
    }),
    ProyectosModule,
    ExperienciasModule,
    BtnOpcionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
