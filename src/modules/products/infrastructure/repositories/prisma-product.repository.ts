import prisma from "@lib/prisma"
import { ProductRepository } from "@modules/products/domain/repositories/product.repository"
import { Product } from "@modules/products/domain/entities/product.entity"

export class PrismaProductRepository implements ProductRepository {

  async create(data: Product): Promise<Product> {
    return prisma.product.create({
      data
    })
  }

  async findAll(): Promise<Product[]> {
    return prisma.product.findMany()
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id }
    })
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return prisma.product.update({
      where: { id },
      data
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.product.delete({
      where: { id }
    })
  }

}