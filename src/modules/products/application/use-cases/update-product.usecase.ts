import { ProductRepository } from "@modules/products/domain/repositories/product.repository"
import { UpdateProductDTO } from "@modules/products/application/dtos/update-product.dto"

export class UpdateProductUseCase {

  constructor(private repository: ProductRepository) {}

  async execute(data: UpdateProductDTO) {
    const { id, ...updateData } = data

    return this.repository.update(id, updateData)
  }

}