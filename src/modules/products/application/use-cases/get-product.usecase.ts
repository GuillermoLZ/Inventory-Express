import { ProductRepository } from "@modules/products/domain/repositories/product.repository"

export class GetProductUseCase {

  constructor(private repository: ProductRepository) {}

  async execute(id: number) {
    const product = await this.repository.findById(id)

    if (!product) {
      throw new Error("Producto no encontrado")
    }

    return product
  }

}