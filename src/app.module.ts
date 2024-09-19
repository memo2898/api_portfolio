import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ExperienciasModule } from './experiencias/experiencias.module';
import { BtnOpcionesModule } from './btn_opciones/btn_opciones.module';
import { BtnsXProyectosModule } from './btns_x_proyectos/btns_x_proyectos.module';
import { TiposHabilidadesModule } from './tipos_habilidades/tipos_habilidades.module';

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
    BtnsXProyectosModule,
    TiposHabilidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
