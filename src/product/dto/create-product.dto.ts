import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ example: 'HAVIT HV-692 Gamepad' })
    name: string;

    @ApiProperty({ example: 'Gamepad' })
    category: string;

    @ApiProperty({ example: 50.00 })
    original_price: number;

    @ApiProperty({ example: true })
    flash_sales: boolean;

    @ApiProperty({ example: 40.00 })
    promotional_price: number;

    @ApiProperty({ example: 10.00 })
    promotional_percentage: number;

    @ApiProperty({ example: 4 })
    stars: number;

    @ApiProperty({ example: 'https://example.com/image1.jpg' })
    image: string;
}
