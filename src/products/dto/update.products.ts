import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
    @ApiProperty({ example: '1', description: 'Product ID', required: true })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    id: number;

    @ApiProperty({ example: 'Banana', description: 'Product title', required: false })
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    title?: string;

    @ApiProperty({ example: 'So sweet', description: 'Product description', required: false })
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ example: '100', description: 'Product price', required: false })
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @IsOptional()
    price?: number;

    @ApiProperty({ example: 'Fruits', description: 'Product category', required: false })
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    category?: string;
}
