import { ProductRepository } from "@modules/products/domain/repositories/product.repository"

export class DeleteProductUseCase {

  constructor(private repository: ProductRepository) {}

  async execute(id: number) {
    return this.repository.delete(id)
  }

}