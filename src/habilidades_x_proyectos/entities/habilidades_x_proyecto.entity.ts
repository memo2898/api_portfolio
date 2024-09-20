import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbld_habilidades_x_proyectos')
export class HabilidadesXProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_proyecto: number;

  @Column()
  id_habilidad: number;

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
