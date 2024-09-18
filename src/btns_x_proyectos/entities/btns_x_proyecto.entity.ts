import { BtnOpcione } from 'src/btn_opciones/entities/btn_opcione.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_btns_x_proyecto')
export class BtnsXProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_proyecto: number;

  @OneToOne(() => Proyecto, (proyecto) => proyecto, { eager: true })
  @JoinColumn({ name: 'id' })
  proyecto: Proyecto;

  @Column()
  id_btn: number;

  @OneToOne(() => BtnOpcione, (btnOpcione) => btnOpcione, { eager: true })
  @JoinColumn({ name: 'id' })
  btnOpcione: BtnOpcione;

  @Column()
  src: string;

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
