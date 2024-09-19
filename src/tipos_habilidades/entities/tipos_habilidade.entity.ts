import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblm_tipos_habilidades')
export class TiposHabilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
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
