import { ProductRepository } from "@modules/products/domain/repositories/product.repository"
import { NotFoundError } from "@shared/errors/app-error"

export class GetProductUseCase {

  constructor(private repository: ProductRepository) {}

  async execute(id: number) {
    const product = await this.repository.findById(id)

    if (!product) {
      throw new NotFoundError("Producto no encontrado")
    }

    return product
  }

}