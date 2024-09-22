import { BloquesMultimedia } from 'src/bloques_multimedia/entities/bloques_multimedia.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tblm_contenido_multimedia')
export class ContenidoMultimedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_bloque: number;

  @ManyToOne(() => BloquesMultimedia, (bloque) => bloque.contenidoMultimedia)
  @JoinColumn({ name: 'id_bloque' }) // Asegura que el JoinColumn coincida con el nuevo nombre
  bloque: BloquesMultimedia;

  @Column()
  nombre: string;

  @Column('longtext')
  contenido: string;

  @Column()
  formato: string;

  @Column('longtext')
  descripcion: string;

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
}
