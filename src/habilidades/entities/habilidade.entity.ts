import { HabilidadesXProyecto } from 'src/habilidades_x_proyectos/entities/habilidades_x_proyecto.entity';
import { TiposHabilidade } from 'src/tipos_habilidades/entities/tipos_habilidade.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tblm_habilidades')
export class Habilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_tipo_habilidad: number;

  @OneToOne(() => TiposHabilidade, (tipo_habilidad) => tipo_habilidad, {
    eager: true,
  })
  @JoinColumn({ name: 'id_tipo_habilidad' })
  tipo_habilidad: TiposHabilidade;

  @Column()
  habilidad: string;

  @Column()
  descripcion: string;

  @Column()
  imagen: string;

  @Column()
  imagen_alt: string;

  @Column()
  tiempo_inicio_aprendizaje: string;

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

  @OneToOne(
    () => HabilidadesXProyecto,
    (HabilidadesXProyecto) => HabilidadesXProyecto,
  ) //Relacion anidada
  HabilidadesXProyecto: HabilidadesXProyecto;
}
