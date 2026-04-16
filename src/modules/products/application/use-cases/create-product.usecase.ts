import { ProductRepository } from "@modules/products/domain/repositories/product.repository"
import { CreateProductDTO } from "@modules/products/application/dtos/create-product.dto"
import { EventEmitter } from "@shared/events/event-emitter"

export class CreateProductUseCase {

  constructor(
    private repository: ProductRepository,
    private eventEmitter: EventEmitter
  ) {}

  async execute(data: CreateProductDTO) {

    const product = await this.repository.create(data)

    this.eventEmitter.emit("product.created", {
      id: product.id,
      name: product.name,
    })

    return product
  }

}