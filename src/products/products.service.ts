import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create.products';
import { GetListProductsDto } from './dto/get-list.products';
import { UpdateProductDto } from './dto/update.products';

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository) {}

    async tryCreate(data: CreateProductDto) {
        try {
            return await this.create(data);
        } catch (error) {
            console.log('ProductsService.tryCreate => ', error);
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async tryFindMany(data: GetListProductsDto) {
        try {
            return await this.findMany(data);
        } catch (error) {
            console.log('ProductsService.tryFindMany => ', error);
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async tryFindOne(id: number) {
        try {
            return await this.findOne(id);
        } catch (error) {
            console.log('ProductsService.tryFindOne => ', error);
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async tryUpdate(data: UpdateProductDto) {
        try {
            return await this.update(data);
        } catch (error) {
            console.log('ProductsService.tryUpdate => ', error);
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async tryDelete(id: number) {
        try {
            return await this.delete(id);
        } catch (error) {
            console.log('ProductsService.tryDelete => ', error);
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(data: CreateProductDto) {
        return await this.productsRepository.create(data);
    }

    async findMany(data: GetListProductsDto) {
        return await this.productsRepository.findMany(data);
    }

    async findOne(id: number) {
        const product = await this.productsRepository.findOne(id);
        if (!product) {
            throw new HttpException('product_not_found', HttpStatus.BAD_REQUEST);
        }
        return product;
    }

    async update(data: UpdateProductDto) {
        return await this.productsRepository.update(data);
    }

    async delete(id: number) {
        await this.productsRepository.delete(id);
    }
}
