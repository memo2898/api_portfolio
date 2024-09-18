import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tblm_experiencias')
export class Experiencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  posicion: string;

  @Column()
  institucion: string;

  @Column()
  pais: string;

  @Column()
  descripcion: string;

  @Column()
  fecha_inicio: string;

  @Column()
  fecha_fin: string;

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

  @OneToMany(() => Proyecto, (proyecto) => proyecto.id_experiencia)
  proyecto: Proyecto[];
}
