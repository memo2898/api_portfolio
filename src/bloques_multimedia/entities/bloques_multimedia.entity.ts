import { ContenidoMultimedia } from 'src/contenido_multimedia/entities/contenido_multimedia.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tlbm_bloques_multimedia')
export class BloquesMultimedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  id_proyecto: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto, { eager: true })
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @Column()
  nombre: string;

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

  // Relación OneToMany con ContenidoMultimedia
  @OneToMany(
    () => ContenidoMultimedia,
    (contenidoMultimedia) => contenidoMultimedia.bloque,
    { eager: true },
  )
  contenidoMultimedia: ContenidoMultimedia[];
}
