import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, Optional } from 'sequelize';
import { Products } from './products.model';
import { NullishPropertiesOf } from 'sequelize/types/utils';

@Injectable()
export class ProductsRepository {
    constructor(@InjectModel(Products) private repository: typeof Products) {}
    async create(data: Optional<Products, NullishPropertiesOf<Products>>) {
        return await this.repository.create(data);
    }

    async findOne(productId: number) {
        return await this.repository.findByPk(productId, {
            attributes: ['id', 'title', 'description', 'price', 'category'],
            order: [['createdAt', 'DESC']],
        });
    }

    async findMany(data: any) {
        return await this.repository.findAndCountAll();
    }

    async update(data: any) {
        return await this.repository.update(data, { where: { id: data.id } });
    }

    async delete(productId: number) {
        return await this.repository.destroy({ where: { id: productId } });
    }
}
