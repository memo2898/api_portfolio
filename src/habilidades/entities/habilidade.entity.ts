import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblm_habilidades')
export class Habilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_tipo_habilidad: number;

  @Column()
  habilidad: string;

  @Column()
  descripcion: string;

  @Column()
  imagen: string;

  @Column()
  imagen_alt: string;

  @Column()
  tiempo_experiencia: string;

  @Column()
  agregado_por: string;

  @Column()
  agregado_en: string;

  @Column()
  modificado_por: string;

  @Column()
  modificado_en: string;
}
