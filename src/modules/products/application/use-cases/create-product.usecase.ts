import { ProductRepository } from "@modules/products/domain/repositories/product.repository"
import { CreateProductDTO } from "@modules/products/application/dtos/create-product.dto"

export class CreateProductUseCase {

  constructor(private repository: ProductRepository) {}

  async execute(data: CreateProductDTO) {
    return this.repository.create(data)
  }

}