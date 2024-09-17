import { Experiencia } from 'src/experiencias/entities/experiencia.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tblm_proyectos')
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_experiencia: number;

  @ManyToOne(() => Experiencia, (experiencia) => experiencia, { eager: true })
  @JoinColumn({ name: 'id_experiencia' })
  experiencia: Experiencia;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  portada: string;

  @Column()
  agregado_por: string;

  @Column()
  agregado_en: string;

  @Column()
  modificado_por: string;

  @Column()
  modificado_en: string;
}
