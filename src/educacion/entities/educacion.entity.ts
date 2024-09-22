import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblm_educacion')
export class Educacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carrera: string;

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
