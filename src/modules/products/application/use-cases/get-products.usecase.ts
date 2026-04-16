import { ProductRepository } from "@modules/products/domain/repositories/product.repository"

export class GetProductsUseCase {

  constructor(private repository: ProductRepository) {}

  async execute() {
    return this.repository.findAll()
  }

}