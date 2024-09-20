import { Habilidade } from 'src/habilidades/entities/habilidade.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbld_habilidades_x_proyectos')
export class HabilidadesXProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_proyecto: number;

  @OneToOne(() => Proyecto, (proyecto) => proyecto, { eager: true })
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column()
  id_habilidad: number;

  @OneToOne(() => Habilidade, (habilidad) => habilidad, { eager: true })
  @JoinColumn({ name: 'id_habilidad' })
  habilidad: Habilidade;

  @Column()
  estado: string;

  @Column()
  agregado_por: string;

  @Column()
  agregado_en: string;

  @Column()
  modificado_por: string;

  @Column()
  modificado_en: string;
}
