import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.model';
import { ProductsRepository } from './products.repository';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
    imports: [SequelizeModule.forFeature([Products])],
    exports: [ProductsService],
})
export class ProductsModule {}
