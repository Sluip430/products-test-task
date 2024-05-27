import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
    @ApiProperty({ example: 'Banana', description: 'Product title' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: 'So sweet', description: 'Product description' })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ example: '100', description: 'Product price' })
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    price: number;

    @ApiProperty({ example: 'Fruits', description: 'Product category' })
    @IsNotEmpty()
    @IsString()
    category: string;
}
