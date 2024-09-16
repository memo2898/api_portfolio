import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectosModule } from './proyectos/proyectos.module';
import { HabilidadesModule } from './habilidades/habilidades.module';

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
    HabilidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
