import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  // Crear un nuevo usuario
  async create(createUsuarioDto: CreateUsuarioDto) {
    const existingUser = await this.usuariosRepository.findOne({
      where: [
        { username: createUsuarioDto.username },
        { email: createUsuarioDto.email },
      ],
    });

    if (existingUser) {
      throw new ConflictException('Username or email already exists');
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUsuarioDto.password,
      saltOrRounds,
    );

    const nuevoUsuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      password: hashedPassword, // Guardamos la contraseña encriptada
    });

    return await this.usuariosRepository.save(nuevoUsuario);
  }

  // Obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  // Obtener un usuario por su ID
  async findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async findOneByUsername(username: string): Promise<Usuario | undefined> {
    return this.usuariosRepository.findOne({ where: { username } });
  }

  // Actualizar un usuario por su ID
  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    await this.usuariosRepository.update(id, updateUsuarioDto);
    return this.usuariosRepository.findOne({ where: { id } });
  }
}
