import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { TiendaModule } from './tienda/tienda.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CafeModule, TiendaModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'reservation',
    entities: [ CafeModule, TiendaModule],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true
  }),
],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}