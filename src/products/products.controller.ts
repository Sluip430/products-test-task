import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.products';
import { GetListProductsDto } from './dto/get-list.products';
import { UpdateProductDto } from './dto/update.products';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    async create(@Body() dto: CreateProductDto) {
        return await this.productsService.tryCreate(dto);
    }

    @Get()
    async getList(@Query() dto: GetListProductsDto) {
        return await this.productsService.tryFindMany(dto);
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return await this.productsService.tryFindOne(id);
    }

    @Put()
    async update(@Body() dto: UpdateProductDto) {
        return await this.productsService.tryUpdate(dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.productsService.tryDelete(id);
    }
}
