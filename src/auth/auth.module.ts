import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
//import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    UsuariosModule,
    JwtModule.register({
      secret: 'man12345',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // exports: [JwtAuthGuard, JwtService],
})
export class AuthModule {}
