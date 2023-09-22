import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductService {

  constructor (private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const { name, category, flash_sales, image,original_price,promotional_percentage,promotional_price,stars } = createProductDto;
    
    return await this.prisma.produtos.create({
      data: {
        name: name,
        category: category,
        flash_sales: flash_sales,
        image: image,
        original_price: original_price,
        promotional_percentage: promotional_percentage,
        promotional_price: promotional_price,
        stars: stars
      }
    });
  }

  async findAll() {
    return await this.prisma.produtos.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.produtos.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return await this.prisma.produtos.delete({
      where: {
        id: id
      }
    });
  }
}
