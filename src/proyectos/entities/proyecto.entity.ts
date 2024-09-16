import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblm_proyectos')
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

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
