import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CafeService {
   
    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}
    async findAll(): Promise<CafeEntity[]> {
        return await this.cafeRepository.find({ relations: ["tiendas"] });
    }

    async create(Cafe: CafeEntity): Promise<CafeEntity> {
        return await this.cafeRepository.save(Cafe);
    }
}




