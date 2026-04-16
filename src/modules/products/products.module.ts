import { PrismaProductRepository } from "./infrastructure/repositories/prisma-product.repository"

import { CreateProductUseCase } from "./application/use-cases/create-product.usecase"
import { GetProductsUseCase } from "./application/use-cases/get-products.usecase"
import { GetProductUseCase } from "./application/use-cases/get-product.usecase"
import { UpdateProductUseCase } from "./application/use-cases/update-product.usecase"
import { DeleteProductUseCase } from "./application/use-cases/delete-product.usecase"

import { ProductController } from "./presentation/controllers/product.controller"

import { SocketEmitter } from "@infrastructure/websocket/socket-emitter"

export const createProductsModule = () => {

  const repository = new PrismaProductRepository()
  const emitter = new SocketEmitter()

  const createProduct = new CreateProductUseCase(repository, emitter)
  const getProducts = new GetProductsUseCase(repository)
  const getProduct = new GetProductUseCase(repository)
  const updateProduct = new UpdateProductUseCase(repository)
  const deleteProduct = new DeleteProductUseCase(repository)

  const controller = new ProductController(
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
  )

  return {
    controller
  }

}