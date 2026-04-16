import { Request, Response } from "express"
import { CreateProductUseCase } from "@modules/products/application/use-cases/create-product.usecase"
import { GetProductsUseCase } from "@modules/products/application/use-cases/get-products.usecase"
import { GetProductUseCase } from "@modules/products/application/use-cases/get-product.usecase"
import { UpdateProductUseCase } from "@modules/products/application/use-cases/update-product.usecase"
import { DeleteProductUseCase } from "@modules/products/application/use-cases/delete-product.usecase"
import { asyncHandler } from "@shared/utils/async-handle"

export class ProductController {

  constructor(
    private createProduct: CreateProductUseCase,
    private getProducts: GetProductsUseCase,
    private getProduct: GetProductUseCase,
    private updateProduct: UpdateProductUseCase,
    private deleteProduct: DeleteProductUseCase
  ) {}

  create = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.createProduct.execute(req.body)
    res.status(201).json(product)
  })

  findAll = asyncHandler(async (req: Request, res: Response) => {
    const products = await this.getProducts.execute()
    res.json(products)
  })

  findOne = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const product = await this.getProduct.execute(id)
    res.json(product)
  })

  update = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const product = await this.updateProduct.execute({
      id,
      ...req.body
    })
    res.json(product)
  })

  delete = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await this.deleteProduct.execute(id)
    res.status(204).send()
  })

}