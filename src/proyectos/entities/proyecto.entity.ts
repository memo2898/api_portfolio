import { BtnsXProyecto } from 'src/btns_x_proyectos/entities/btns_x_proyecto.entity';
import { Experiencia } from 'src/experiencias/entities/experiencia.entity';
import { HabilidadesXProyecto } from 'src/habilidades_x_proyectos/entities/habilidades_x_proyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
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

  @Column()
  estado: string;

  @OneToOne(() => BtnsXProyecto, (btnsXProyecto) => btnsXProyecto) //Relacion anidada
  btnsXProyecto: BtnsXProyecto;

  @OneToOne(
    () => HabilidadesXProyecto,
    (HabilidadesXProyecto) => HabilidadesXProyecto,
  ) //Relacion anidada
  HabilidadesXProyecto: HabilidadesXProyecto;
}
