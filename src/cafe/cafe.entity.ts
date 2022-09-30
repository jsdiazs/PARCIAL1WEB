import { TiendaEntity } from 'src/tienda/tienda.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
export class CafeEntity {
 @PrimaryGeneratedColumn('uuid')
 id: number;

 @Column()
 nombre: string;
 
 @Column()
 descripcion: string;

 @OneToMany(() => TiendaEntity, tienda => tienda.cafe)
   tienda: TiendaEntity[];

}

}
