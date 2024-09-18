import { BtnsXProyecto } from 'src/btns_x_proyectos/entities/btns_x_proyecto.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblm_btn_opciones')
export class BtnOpcione {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  icono: string;

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

  @OneToOne(() => BtnsXProyecto, (btnsXProyecto) => btnsXProyecto) //Relacion anidada
  btnsXProyecto: BtnsXProyecto;
}
