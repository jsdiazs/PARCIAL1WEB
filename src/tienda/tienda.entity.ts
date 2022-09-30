import { CafeEntity } from 'src/cafe/cafe.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
export class TiendaEntity {
@PrimaryGeneratedColumn('uuid')
id: number;
   
@Column()
nombre: string;
    
@Column()
direccion: string;

@Column()
telefono: string;
   
@OneToMany(() => CafeEntity, cafe => cafe.tienda)
cafe: CafeEntity[];
    
}
