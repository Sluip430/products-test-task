import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Products extends Model<Products> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING(255), allowNull: false })
    title: string;

    @Column({ type: DataType.STRING(2048), allowNull: false })
    description: string;

    @Column({ type: DataType.DOUBLE, allowNull: false })
    price: number;

    @Column({ type: DataType.STRING(255), allowNull: false })
    category: string;
}
