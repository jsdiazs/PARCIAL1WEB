import { Module } from '@nestjs/common';
import { CafeService } from './cafe/cafe.service';
import { CafeTiendaModule } from './cafe-tienda/cafe-tienda.module';

@Module({
  providers: [CafeService],
  imports: [CafeTiendaModule]
})
export class CafeModule {}
